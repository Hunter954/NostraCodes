import os
from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()
migrate = Migrate()


def _save_lead(name, company, phone, email, project_type, message):
    from .models import Lead
    lead = Lead(
        name=name,
        company=company,
        phone=phone,
        email=email,
        project_type=project_type,
        message=message,
    )
    db.session.add(lead)
    db.session.commit()
    return lead


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret-key")
    database_url = os.getenv("DATABASE_URL", "sqlite:///blackforge.db")
    if database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql://", 1)
    app.config["SQLALCHEMY_DATABASE_URI"] = database_url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["ADMIN_USER"] = os.getenv("ADMIN_USER", "admin")
    app.config["ADMIN_PASSWORD"] = os.getenv("ADMIN_PASSWORD", "123456")

    db.init_app(app)
    migrate.init_app(app, db)

    from .models import Lead

    @app.route("/", methods=["GET", "POST"])
    def home():
        if request.method == "POST":
            name = request.form.get("name", "").strip()
            company = request.form.get("company", "").strip()
            phone = request.form.get("phone", "").strip()
            email = request.form.get("email", "").strip()
            project_type = request.form.get("project_type", "").strip()
            message = request.form.get("message", "").strip()

            if not name or not phone or not project_type:
                flash("Preencha nome, WhatsApp e tipo de projeto.", "error")
                return redirect(url_for("home") + "#contato")

            _save_lead(name, company, phone, email, project_type, message)
            flash("Recebemos seu briefing. Agora sua empresa já está um passo mais perto de ter um sistema único.", "success")
            return redirect(url_for("home") + "#contato")

        return render_template("index.html")

    @app.post("/api/leads")
    def api_leads():
        data = request.get_json(silent=True) or request.form
        name = (data.get("name") or "").strip()
        company = (data.get("company") or "").strip()
        phone = (data.get("phone") or "").strip()
        email = (data.get("email") or "").strip()
        project_type = (data.get("project_type") or "").strip()
        message = (data.get("message") or "").strip()

        if not name or not phone or not project_type:
            return jsonify({"ok": False, "message": "Preencha nome, WhatsApp e tipo de projeto."}), 400

        lead = _save_lead(name, company, phone, email, project_type, message)
        return jsonify({"ok": True, "id": lead.id, "message": "Lead salvo com sucesso."}), 201

    @app.route("/admin", methods=["GET", "POST"])
    def admin_login():
        if request.method == "POST":
            username = request.form.get("username", "")
            password = request.form.get("password", "")
            if username == app.config["ADMIN_USER"] and password == app.config["ADMIN_PASSWORD"]:
                session["admin_logged"] = True
                return redirect(url_for("admin_leads"))
            flash("Usuário ou senha inválidos.", "error")
        return render_template("admin_login.html")

    @app.route("/admin/leads")
    def admin_leads():
        if not session.get("admin_logged"):
            return redirect(url_for("admin_login"))
        leads = Lead.query.order_by(Lead.created_at.desc()).all()
        return render_template("admin_leads.html", leads=leads)

    @app.route("/admin/logout")
    def admin_logout():
        session.clear()
        return redirect(url_for("admin_login"))

    return app
