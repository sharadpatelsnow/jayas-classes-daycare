declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const push = (event: string, params: Record<string, string> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, {
      event_category: 'lead_generation',
      ...params,
    })
  }
}

export const trackWhatsAppLead = (source = 'general') => {
  push('whatsapp_click', { event_label: source, event_category: 'lead_generation' })
}

export const trackCallLead = (source = 'general') => {
  push('call_click', { event_label: source, event_category: 'lead_generation' })
}

export const trackDirectionLead = () => {
  push('direction_click', { event_category: 'lead_generation' })
}

export const trackFormLead = (formType = 'admission_enquiry') => {
  push('form_submit', { event_label: formType, event_category: 'lead_generation' })
}

export const trackPageView = (pagePath: string, pageTitle: string) => {
  push('page_view', { page_path: pagePath, page_title: pageTitle })
}

export const trackScrollDepth = (depth: number) => {
  push('scroll', { event_label: `${depth}%`, event_category: 'engagement' })
}

export const trackCTAClick = (ctaName: string, location: string) => {
  push('cta_click', { event_label: ctaName, event_category: location })
}
