import { type HTMLAttributes, type ElementType } from "react";
import { cn } from "@/lib/utils";

type SectionBackground = "default" | "muted" | "primary";
type SectionWidth = "default" | "narrow" | "wide" | "full";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Rendered element. Defaults to <section>. */
  as?: ElementType;
  /** Background variant. */
  background?: SectionBackground;
  /** Inner content max-width. */
  width?: SectionWidth;
  /** Removes the default vertical padding. */
  flush?: boolean;
}

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-background text-primary",
  muted: "bg-primary-50 text-primary",
  primary: "bg-primary text-background",
};

const widthClasses: Record<SectionWidth, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export function Section({
  as,
  background = "default",
  width = "default",
  flush = false,
  className,
  children,
  ...props
}: SectionProps) {
  const Component = as ?? "section";

  return (
    <Component
      className={cn(backgroundClasses[background], !flush && "py-16 md:py-24", className)}
      {...props}
    >
      <div className={cn("mx-auto px-6", widthClasses[width])}>{children}</div>
    </Component>
  );
}
