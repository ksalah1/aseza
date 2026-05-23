/**
 * Central site configuration. Update contact details and social handles
 * here — components read from this single source.
 */
export const siteConfig = {
  name: "ASEZA.co",
  url: "https://aseza.co",
  email: "info@aseza.co",
  // Display phone in international format.
  phone: "+962 7 8555 9253",
  // Digits only, with country code — used to build wa.me links.
  whatsapp: "962785559253",
  social: {
    facebook: "https://facebook.com/aseza.co",
    instagram: "https://instagram.com/aseza.co",
    linkedin: "https://linkedin.com/company/aseza-co",
  },
} as const;

/** Build a WhatsApp click-to-chat link, optionally with a prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
