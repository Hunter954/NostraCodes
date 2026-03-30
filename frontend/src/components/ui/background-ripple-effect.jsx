import { cn } from "@/lib/utils";

export function BackgroundRippleEffect({ className }) {
  return (
    <div className={cn("pointer-events-none absolute inset-x-[-8%] top-[-9rem] h-[48rem] overflow-hidden", className)} aria-hidden="true">
      {[0, 1, 2, 3].map((item) => (
        <span
          key={item}
          className="absolute left-1/2 top-36 aspect-square w-[min(72vw,62rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 shadow-[0_0_120px_rgba(124,92,255,.12)] animate-ripple"
          style={{ animationDelay: `${item * 3}s` }}
        />
      ))}
    </div>
  );
}
