export function BackgroundRippleEffect() {
  return (
    <div className="ripple-grid-layer" aria-hidden="true">
      <div className="ripple-grid-base" />
      <div className="ripple-grid-fade" />
      <span className="ripple-circle ripple-circle-1" />
      <span className="ripple-circle ripple-circle-2" />
      <span className="ripple-circle ripple-circle-3" />
      <span className="ripple-circle ripple-circle-4" />
    </div>
  );
}
