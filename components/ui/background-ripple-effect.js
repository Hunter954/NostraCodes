"use client";
import React, { useMemo, useState } from "react";

export function BackgroundRippleEffect() {
  const columns = 18;
  const rows = 11;
  const total = columns * rows;
  const [active, setActive] = useState(-1);

  const cells = useMemo(
    () => Array.from({ length: total }, (_, index) => ({ index })),
    [total],
  );

  return (
    <div className="ripple-surface" aria-hidden="true">
      <div className="ripple-overlay ripple-overlay-top" />
      <div className="ripple-overlay ripple-overlay-bottom" />
      <div className="ripple-grid">
        {cells.map(({ index }) => {
          const distance = active === -1 ? 999 : Math.abs((index % columns) - (active % columns)) + Math.abs(Math.floor(index / columns) - Math.floor(active / columns));
          const isNear = distance <= 3;
          return (
            <button
              key={index}
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className={`ripple-cell ${active === index ? "is-active" : ""} ${isNear ? `distance-${Math.min(distance, 3)}` : ""}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onMouseLeave={() => setActive(-1)}
              onBlur={() => setActive(-1)}
            >
              <span className="ripple-cell-inner" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
