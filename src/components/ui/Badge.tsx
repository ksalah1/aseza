import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "gold" | "success";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-primary-50 text-primary-600",
  gold: "bg-accent/15 text-accent-600",
  success: "bg-emerald-50 text-emerald-700",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
