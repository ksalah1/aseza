import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Center a small diamond accent on the line. */
  ornament?: boolean;
}

/**
 * Decorative gold divider for section breaks. Purely presentational —
 * direction-agnostic, so it renders identically in RTL and LTR.
 */
export function Divider({
  ornament = true,
  className,
  ...props
}: DividerProps) {
  return (
    <div
      role="separator"
      aria-hidden
      className={cn("flex items-center justify-center gap-3 py-2", className)}
      {...props}
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
      {ornament && (
        <span className="size-2 rotate-45 rounded-[1px] bg-accent" />
      )}
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
    </div>
  );
}
