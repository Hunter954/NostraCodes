"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const COLS = 24;
const ROWS = 14;
const MAX_DIST = 3.5;
const WAVE_STEPS = 10;
const STEP_MS = 70;

function distance(aCol, aRow, bCol, bRow) {
  const dx = aCol - bCol;
  const dy = aRow - bRow;
  return Math.sqrt(dx * dx + dy * dy);
}

export function BackgroundRippleEffect() {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [wave, setWave] = useState(null);

  const cells = useMemo(() => {
    return Array.from({ length: COLS * ROWS }, (_, index) => ({
      index,
      col: index % COLS,
      row: Math.floor(index / COLS),
    }));
  }, []);

  useEffect(() => {
    if (!wave || wave.step >= WAVE_STEPS) return;
    const timer = window.setTimeout(() => {
      setWave((current) => (current ? { ...current, step: current.step + 1 } : null));
    }, STEP_MS);
    return () => window.clearTimeout(timer);
  }, [wave]);

  const resolveCellFromPointer = (event) => {
    const element = containerRef.current;
    if (!element) return null;

    const rect = element.getBoundingClientRect();
    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);

    const col = Math.min(COLS - 1, Math.max(0, Math.floor((x / rect.width) * COLS)));
    const row = Math.min(ROWS - 1, Math.max(0, Math.floor((y / rect.height) * ROWS)));

    return { col, row };
  };

  const handlePointerMove = (event) => {
    const cell = resolveCellFromPointer(event);
    if (!cell) return;
    setHovered(cell);
  };

  const handlePointerLeave = () => setHovered(null);

  const handleClick = (event) => {
    const cell = resolveCellFromPointer(event);
    if (!cell) return;
    setWave({ ...cell, step: 0, key: Date.now() });
  };

  return (
    <div
      ref={containerRef}
      className="interactive-grid-bg"
      aria-hidden="true"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      onClick={handleClick}
    >
      <div className="interactive-grid-overlay interactive-grid-fade" />
      <div className="interactive-grid-overlay interactive-grid-glow-left" />
      <div className="interactive-grid-overlay interactive-grid-glow-right" />
      <div className="interactive-grid-overlay interactive-grid-noise" />

      <div className="interactive-grid" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
        {cells.map((cell) => {
          const hoverDistance = hovered ? distance(cell.col, cell.row, hovered.col, hovered.row) : Infinity;
          const waveDistance = wave ? distance(cell.col, cell.row, wave.col, wave.row) : Infinity;
          const waveFront = wave ? wave.step * 0.95 : -100;
          const waveDelta = Math.abs(waveDistance - waveFront);

          let intensity = 0;

          if (hoverDistance <= MAX_DIST) {
            intensity = Math.max(intensity, 1 - hoverDistance / MAX_DIST);
          }

          if (wave && wave.step < WAVE_STEPS && waveDelta < 0.9) {
            intensity = Math.max(intensity, 1 - waveDelta / 0.9);
          }

          return (
            <span
              key={cell.index}
              className="interactive-grid-cell"
              style={{
                opacity: 0.08 + intensity * 0.9,
                transform: intensity > 0.12 ? `scale(${1 + intensity * 0.18})` : "scale(1)",
                boxShadow:
                  intensity > 0.08
                    ? `0 0 ${10 + intensity * 30}px rgba(124, 92, 255, ${0.14 + intensity * 0.22})`
                    : "none",
                background:
                  intensity > 0.08
                    ? `linear-gradient(180deg, rgba(255,255,255,${0.16 + intensity * 0.16}), rgba(124,92,255,${0.14 + intensity * 0.28}))`
                    : "rgba(255,255,255,0.02)",
                borderColor:
                  intensity > 0.08 ? `rgba(255,255,255,${0.12 + intensity * 0.24})` : "rgba(255,255,255,0.05)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
