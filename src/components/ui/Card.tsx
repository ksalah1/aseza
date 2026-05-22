import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds a lift + deeper shadow on hover. */
  hoverable?: boolean;
  /** Adds a gold accent border. */
  accent?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { hoverable = false, accent = false, className, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm transition-all duration-200",
        accent
          ? "border border-accent/40"
          : "border border-primary-100",
        hoverable &&
          "hover:-translate-y-1 hover:shadow-lg hover:border-accent/40",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export type CardSectionProps = HTMLAttributes<HTMLDivElement>;

export function CardHeader({ className, ...props }: CardSectionProps) {
  return <div className={cn("mb-4 space-y-1.5", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold text-primary", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardSectionProps) {
  return <div className={cn("text-primary-500", className)} {...props} />;
}
