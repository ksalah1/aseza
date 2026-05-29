"use client";

import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppLinkProps {
  href: string;
  location: string;
  ctaText: string;
  hasPrefill: boolean;
  locale?: string;
  investorType?: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export function WhatsAppLink({
  href,
  location,
  ctaText,
  hasPrefill,
  locale,
  investorType,
  className,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  "aria-label": ariaLabel,
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      onClick={() =>
        trackWhatsAppClick({ location, ctaText, hasPrefill, locale, investorType })
      }
    >
      {children}
    </a>
  );
}
