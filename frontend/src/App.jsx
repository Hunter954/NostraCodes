import { BarChart3, Bot, LayoutDashboard, Layers3, ArrowRight } from "lucide-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const services = [
  {
    icon: Layers3,
    title: "Sistemas internos",
    text: "Patrimonial, processos, equipes, relatórios e fluxos feitos para a sua operação.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards premium",
    text: "Leitura rápida, visual forte e experiência que transmite tecnologia de verdade.",
  },
  {
    icon: BarChart3,
    title: "Landing pages",
    text: "Páginas modernas para gerar orçamento, autoridade e percepção premium.",
  },
  {
    icon: Bot,
    title: "Automações",
    text: "WhatsApp, follow-up, alertas e processos automáticos que aceleram a empresa.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#06060a] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
          <img src="/logomarca.svg" alt="Logomarca" className="h-14 w-auto" />
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#solucoes">Soluções</a>
            <a href="#processo">Processo</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-4 pb-10 pt-14 md:pt-20">
          <BackgroundRippleEffect />
          <div className="relative z-10 mx-auto w-[min(1180px,100%)]">
            <div className="mx-auto max-w-[760px] text-center">
              <div className="mb-5 text-[12px] font-bold uppercase tracking-[0.12em] text-white/75">UI premium · automações · sistemas únicos</div>
              <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                <span className="block">O próximo nível</span>
                <span className="block">da sua empresa.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-[720px] text-balance text-lg leading-relaxed text-white/80 md:text-[1.32rem]">
                Transforme sua operação em uma experiência mais forte, moderna e profissional.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#7c5cff] px-7 font-semibold shadow-[0_18px_44px_rgba(124,92,255,.35)] transition hover:-translate-y-0.5" href="#contato">
                  Solicitar projeto
                </a>
                <HoverBorderGradient onClick={() => document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" })}>
                  Demonstração
                </HoverBorderGradient>
              </div>
            </div>

            <div className="relative mx-auto mt-12 max-w-[1040px]">
              <div className="absolute inset-x-[10%] bottom-[-24px] h-28 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,.26)_0%,rgba(124,92,255,.10)_38%,transparent_70%)] blur-3xl" />
              <div className="relative rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,.96),rgba(8,8,12,.98))] p-4 shadow-[0_30px_120px_rgba(0,0,0,.5)]">
                <div className="mb-4 flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /></div>
                <div className="grid gap-4 md:grid-cols-[180px_1fr]">
                  <aside className="hidden rounded-[22px] border border-white/8 bg-white/[0.04] p-4 md:grid md:content-start md:gap-3">
                    <div className="mb-2 grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(124,92,255,.96),rgba(255,255,255,.18))] font-extrabold">F</div>
                    <div className="rounded-2xl bg-[#7c5cff]/15 px-3 py-2 text-sm text-white">Overview</div>
                    <div className="px-3 py-2 text-sm text-white/70">Operação</div>
                    <div className="px-3 py-2 text-sm text-white/70">Financeiro</div>
                    <div className="px-3 py-2 text-sm text-white/70">Automações</div>
                  </aside>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between gap-3 rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
                      <div>
                        <small className="text-white/55">Sistema proprietário</small>
                        <strong className="mt-1 block text-base">Interface premium para empresas reais</strong>
                      </div>
                      <div className="hidden items-center gap-3 md:flex">
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-[#7c5cff]/20 font-semibold">KP</div>
                        <div>
                          <b className="block text-sm">Cliente premium</b>
                          <span className="text-sm text-white/55">Tema personalizável</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        ["Performance", "+148%", "Leads qualificados"],
                        ["Operação", "-37h", "Economia por mês"],
                        ["Receita", "R$ 58k", "Em tempo real"],
                      ].map(([label, value, help]) => (
                        <div key={label} className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
                          <span className="text-sm text-white/55">{label}</span>
                          <strong className="mt-2 block text-[clamp(1.4rem,2vw,2rem)]">{value}</strong>
                          <small className="text-white/55">{help}</small>
                        </div>
                      ))}
                    </div>
                    <div className="grid gap-4 lg:grid-cols-[1.08fr_.92fr]">
                      <div className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
                        <div className="mb-5 flex items-center justify-between"><b>Performance</b><span className="text-sm text-white/55">30 dias</span></div>
                        <div className="flex h-36 items-end gap-3 md:h-44">
                          {[42, 76, 55, 84, 70, 92, 62].map((height, idx) => (
                            <i key={idx} className="block flex-1 rounded-t-full rounded-b-xl bg-[linear-gradient(180deg,rgba(124,92,255,.96),rgba(124,92,255,.26))]" style={{ height: `${height}%` }} />
                          ))}
                        </div>
                      </div>
                      <div className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
                        <div className="mb-5 flex items-center justify-between"><b>Automações</b><span className="text-sm text-white/55">Ao vivo</span></div>
                        <div className="grid gap-3 text-sm text-white/70">
                          {["Resumo diário para gestão", "Follow-up automático de orçamento", "Alertas internos da operação", "Notificações para equipe"].map((item) => (
                            <div key={item} className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">{item}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:hidden">
                      {['Início', 'Pedidos', 'Relatórios', 'Perfil'].map((item, idx) => (
                        <div key={item} className={`grid min-h-11 place-items-center rounded-2xl border text-xs ${idx === 0 ? 'border-[#7c5cff]/30 bg-[#7c5cff]/15 text-white' : 'border-white/5 bg-white/[0.03] text-white/60'}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="px-4 py-24">
          <div className="mx-auto w-[min(1180px,100%)]">
            <div className="mx-auto mb-10 max-w-[860px] text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">O que sua empresa pode ter</div>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.04em]">Projetos sob medida para vender melhor, operar melhor e parecer maior.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="rounded-[26px] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-xl">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(124,92,255,.96),rgba(255,255,255,.18))]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
                    <p className="leading-7 text-white/65">{service.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="processo" className="px-4 pb-24">
          <div className="mx-auto grid w-[min(1180px,100%)] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">Como funciona</div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em]">Da ideia ao sistema certo.</h2>
              <p className="mt-4 max-w-[560px] text-white/65">O cliente vê autoridade, visual premium e estrutura. Por trás disso, existe processo, tecnologia e construção sob medida.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["01", "Diagnóstico", "Entendemos a operação, os gargalos e o objetivo comercial."],
                ["02", "Direção visual", "Criamos a experiência e o visual do sistema para o seu fluxo."],
                ["03", "Desenvolvimento", "Transformamos a ideia em um projeto funcional e escalável."],
              ].map(([num, title, text]) => (
                <article key={num} className="rounded-[26px] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-[#7c5cff]/15 font-semibold text-white">{num}</div>
                  <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                  <p className="text-white/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-4 pb-24">
          <div className="mx-auto grid w-[min(1180px,100%)] gap-8 rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(17,17,24,.84),rgba(10,10,16,.94))] p-6 shadow-[0_24px_90px_rgba(0,0,0,.35)] md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">Solicite seu projeto</div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em]">Seu sistema começa aqui.</h2>
              <p className="mt-4 max-w-[520px] text-white/65">Conte o que sua empresa precisa e vamos desenhar uma solução exclusiva para operação, venda e autoridade.</p>
            </div>
            <form className="grid gap-4 md:grid-cols-2" action="/api/leads" method="post">
              <label className="grid gap-2"><span className="text-sm text-white/80">Nome</span><input className="min-h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-4 outline-none ring-0 transition focus:border-[#7c5cff]/70" name="name" placeholder="Seu nome" required /></label>
              <label className="grid gap-2"><span className="text-sm text-white/80">Empresa</span><input className="min-h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-4 outline-none ring-0 transition focus:border-[#7c5cff]/70" name="company" placeholder="Nome da empresa" /></label>
              <label className="grid gap-2"><span className="text-sm text-white/80">WhatsApp</span><input className="min-h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-4 outline-none ring-0 transition focus:border-[#7c5cff]/70" name="phone" placeholder="(00) 00000-0000" required /></label>
              <label className="grid gap-2"><span className="text-sm text-white/80">E-mail</span><input className="min-h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-4 outline-none ring-0 transition focus:border-[#7c5cff]/70" name="email" placeholder="voce@empresa.com" /></label>
              <label className="grid gap-2 md:col-span-2"><span className="text-sm text-white/80">Tipo de projeto</span><select className="min-h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-4 outline-none transition focus:border-[#7c5cff]/70" name="project_type" required><option value="">Selecione</option><option>Sistema interno</option><option>Dashboard</option><option>Landing page</option><option>Site institucional</option><option>Automação</option></select></label>
              <label className="grid gap-2 md:col-span-2"><span className="text-sm text-white/80">Mensagem</span><textarea className="min-h-32 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none transition focus:border-[#7c5cff]/70" name="message" placeholder="Fale um pouco sobre o projeto" /></label>
              <button className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#7c5cff] px-7 font-semibold shadow-[0_18px_44px_rgba(124,92,255,.35)] transition hover:-translate-y-0.5 md:col-span-2" type="submit">
                Solicitar projeto <ArrowRight className="ml-2" size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
