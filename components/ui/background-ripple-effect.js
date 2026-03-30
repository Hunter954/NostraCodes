export function BackgroundRippleEffect() {
  return (
    <div className="ripple-stage" aria-hidden="true">
      <span className="ripple-circle ripple-circle-1" />
      <span className="ripple-circle ripple-circle-2" />
      <span className="ripple-circle ripple-circle-3" />
      <span className="ripple-circle ripple-circle-4" />
    </div>
  );
}
