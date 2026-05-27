/**
 * Central site configuration. Update contact details, the legal entity, and
 * social handles here — components and schema generation read from this
 * single source.
 */
export const siteConfig = {
  // Visible service brand (navbar, footer wordmark, OG siteName).
  name: "ASEZA.co",
  url: "https://aseza.co",
  email: "info@aseza.co",
  // Single voice/WhatsApp line. Display and tel: (E.164) kept in sync.
  phone: "+962 78 555 9253",
  phoneTel: "+962785559253",
  // Digits only, with country code — used to build wa.me links.
  whatsapp: "962785559253",
  // The legal entity behind the ASEZA service line.
  firm: {
    nameEn: "Barakat Law Firm",
    nameAr: "البركات للمحاماة",
    legalName: "Barakat Law Firm",
    parentUrl: "https://nourbarakat.com",
  },
  // Single source for the firm's address — footer display + JSON-LD schema.
  address: {
    streetEn: "Abdul Razzaq Al-Dalabeeh Street, Villa 48",
    streetAr: "شارع عبد الرزاق الدلابيح - فيلا ٤٨",
    displayEn:
      "Shmeisani, Abdul Razzaq Al-Dalabeeh Street, Villa 48, Amman, Jordan",
    displayAr: "الشميساني - شارع عبد الرزاق الدلابيح - فيلا ٤٨، عمّان، الأردن",
    locality: "Shmeisani",
    localityAr: "الشميساني",
    region: "Amman",
    regionAr: "عمّان",
    country: "JO",
    countryAr: "الأردن",
  },
  officialAsezaUrl: "https://www.aseza.jo",
  social: {
    facebook: "https://facebook.com/aseza.co",
    instagram: "https://instagram.com/aseza.co",
    linkedin: "https://linkedin.com/company/aseza-co",
  },
} as const;

/** Locale-appropriate firm name for the legal entity. */
export function firmName(locale: string): string {
  return locale === "ar" ? siteConfig.firm.nameAr : siteConfig.firm.nameEn;
}

/** Locale-appropriate display address. */
export function addressDisplay(locale: string): string {
  return locale === "ar"
    ? siteConfig.address.displayAr
    : siteConfig.address.displayEn;
}

/** Build a WhatsApp click-to-chat link, optionally with a prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** `tel:` link for the firm's voice line. */
export function phoneLink(): string {
  return `tel:${siteConfig.phoneTel}`;
}

/** Display string for the firm's voice line. Keep on one line via CSS. */
export function phoneDisplay(): string {
  return siteConfig.phone;
}
