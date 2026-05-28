import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp"
  | "external";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-background shadow-sm hover:bg-primary-800 focus-visible:outline-primary",
  secondary:
    "bg-teal-600 text-white shadow-sm hover:bg-teal-700 focus-visible:outline-teal-600",
  outline:
    "border border-primary/30 bg-white text-primary hover:bg-primary-50 focus-visible:outline-primary",
  ghost:
    "bg-transparent text-primary hover:bg-primary-50 focus-visible:outline-primary",
  whatsapp:
    "bg-[#25D366] text-white shadow-sm hover:bg-[#1FA855] focus-visible:outline-[#25D366]",
  external:
    "border border-accent/40 bg-teal-50 text-teal-900 hover:bg-teal-100 focus-visible:outline-teal-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm gap-1.5",
  md: "h-12 px-6 text-sm md:text-base gap-2",
  lg: "h-14 px-8 text-base md:text-lg gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
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
        "inline-flex items-center justify-center rounded-xl font-semibold transition-colors",
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
});
