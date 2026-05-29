declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function trackWhatsAppClick(params: {
  location: string
  ctaText: string
  hasPrefill: boolean
  investorType?: string
  locale?: string
}) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'whatsapp_cta_click', {
    event_category: 'conversion',
    cta_location: params.location,
    cta_text: params.ctaText,
    prefill_text: params.hasPrefill ? 'yes' : 'no',
    investor_type: params.investorType ?? 'unknown',
    page_url: window.location.pathname,
    locale: params.locale ?? 'ar',
  })
}

export function trackLanguageSwitch(from: string, to: string) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'language_switch', {
    event_category: 'engagement',
    from_locale: from,
    to_locale: to,
    current_page: window.location.pathname,
  })
}

export function trackFaqExpanded(questionText: string, index: number) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'faq_expanded', {
    event_category: 'engagement',
    question_text: questionText.slice(0, 100),
    question_index: index,
    page_url: window.location.pathname,
  })
}
