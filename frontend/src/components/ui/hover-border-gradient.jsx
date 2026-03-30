import { cn } from "@/lib/utils";

export function HoverBorderGradient({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "group relative inline-flex rounded-full p-px bg-[linear-gradient(90deg,rgba(124,92,255,.95),rgba(255,255,255,.75),rgba(124,92,255,.95))] bg-[length:200%_100%] shadow-[0_18px_44px_rgba(124,92,255,.25)] transition-all hover:bg-[position:100%_0]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#09090f] px-7 font-semibold text-white">
        {children}
      </span>
      <span className="pointer-events-none absolute inset-0 -translate-x-[130%] rounded-full bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,.32)_50%,transparent_80%)] transition-transform duration-700 group-hover:translate-x-[130%]" />
    </button>
  );
}
