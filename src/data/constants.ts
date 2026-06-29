export const BUSINESS = {
  name: "Jaya's Classes and Day Care Center",
  shortName: "Jaya's Classes",
  tagline: "Where Academics Meet Comprehensive Care",
  subTagline: "Building Strong Foundations for Learning, Confidence and Growth.",
  phone: "+917869008525",
  phoneDisplay: "+91 7869008525",
  phoneClean: "7869008525",
  email: "support@jayakipathshala.in",
  whatsapp: "917869008525",
  address: {
    line1: "Saffron Glory, Second Floor",
    line2: "Above Swasthya Clinic, Near Toy Mall, Kharadi",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    pin: "411014",
    full: "Saffron Glory, Second Floor, Above Swasthya Clinic, Near Toy Mall, Kharadi, Pune, Maharashtra 411014",
  },
  mapsUrl: "https://share.google/znqeH2qbubQDPgjke",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8!2d73.9475!3d18.5523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e84f4ddb69%3A0xb60a1eca2e71fedc!2sKharadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  website: "https://jayasclasses.in",
  hours: "Mon–Sat: 8:00 AM – 7:00 PM",
  ga4Id: import.meta.env.VITE_GA4_ID || 'G-XXXXXXXXXX',
  gtmId: import.meta.env.VITE_GTM_ID || 'GTM-XXXXXXX',
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || '',
} as const

export const COLORS = {
  primary: '#1E3A8A',
  secondary: '#14B8A6',
  accent: '#F59E0B',
  whatsapp: '#25D366',
} as const

export const WHATSAPP_MESSAGES = {
  general: "Hi, I want to enquire about admissions at Jaya's Classes and Day Care Center, Kharadi",
  daycare: "Hi, I want to know about Daycare services at Jaya's Classes, Kharadi",
  academics: "Hi, I want to know about tuition classes at Jaya's Classes, Kharadi",
  class9to10: "Hi, I'm interested in Class 9-10 tuition with focus on Maths and Science coaching",
  feedback: "Hi, I'd like to share my feedback about Jaya's Classes",
  directions: "Hi, can you share directions to Jaya's Classes and Day Care Center, Kharadi?",
} as const

export const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/academics', label: 'Academics' },
  { path: '/daycare', label: 'Day Care' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
  { path: '/faq', label: 'FAQ' },
] as const
