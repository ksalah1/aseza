import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon rendered alongside the label. */
  icon?: ReactNode;
  /**
   * Which logical side the icon sits on. "start" follows text direction
   * (left in LTR, right in RTL); "end" is the opposite edge.
   */
  iconPosition?: "start" | "end";
  /** Shows a spinner and disables the button. */
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-background hover:bg-accent hover:text-primary focus-visible:outline-primary",
  secondary:
    "border border-primary text-primary bg-transparent hover:bg-primary hover:text-background focus-visible:outline-primary",
  ghost:
    "bg-transparent text-primary hover:bg-primary-50 focus-visible:outline-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-base gap-2",
  lg: "h-13 px-8 text-lg gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "start",
      isLoading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) {
    const isDisabled = disabled || isLoading;

    // "start" maps to the leading edge in both directions thanks to flex
    // ordering; flip-rtl mirrors directional glyphs (e.g. arrows) in RTL.
    const iconNode = icon ? (
      <span className="inline-flex shrink-0 [&>svg]:flip-rtl" aria-hidden>
        {icon}
      </span>
    ) : null;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={isLoading || undefined}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-colors",
          "focus-visible:outline-2 focus-visible:outline-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-60",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {isLoading && (
          <Loader2 className="size-[1.1em] shrink-0 animate-spin" aria-hidden />
        )}
        {!isLoading && iconPosition === "start" && iconNode}
        {children}
        {!isLoading && iconPosition === "end" && iconNode}
      </button>
    );
  },
);
