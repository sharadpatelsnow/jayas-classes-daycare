export interface SEOMeta {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string
  noIndex?: boolean
  schema?: Record<string, unknown>[]
}

export const buildSEO = (meta: SEOMeta): SEOMeta => ({
  ogImage: 'https://jayasclasses.in/og-image.jpg',
  canonical: `https://jayasclasses.in${meta.canonical || ''}`,
  ...meta,
  title: meta.title.includes("Jaya's") ? meta.title : `${meta.title} | Jaya's Classes & Day Care Center, Kharadi`,
})

// Organization Schema for Local SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["ChildCare", "EducationalOrganization", "LocalBusiness"],
  "@id": "https://jayasclasses.in/#organization",
  "name": "Jaya's Classes and Day Care Center",
  "alternateName": ["Jaya's Classes", "Jaya Classes Kharadi"],
  "url": "https://jayasclasses.in",
  "telephone": "+917869008525",
  "email": "support@jayakipathshala.in",
  "priceRange": "₹₹",
  "image": "https://jayasclasses.in/og-image.jpg",
  "description": "Premium daycare, play school and tuition classes for Class 1-8 in Kharadi, Pune",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Second Floor, Tulaja Bhawani Nagar, Near D'Mart Ready",
    "addressLocality": "Kharadi",
    "addressRegion": "Maharashtra",
    "postalCode": "411014",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.5523",
    "longitude": "73.9475"
  },
  "areaServed": {
    "@type": "City",
    "name": "Kharadi, Pune"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "17:00" }
  ],
  "serviceType": ["Daycare", "Play School", "Tuition Classes"],
  "sameAs": ["https://www.google.com/maps/place/Kharadi,+Pune"]
}

// Breadcrumb Schema
export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.name,
    "item": item.url
  }))
})

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the age range for daycare at Jaya's Classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept children from 1 year to 5 years in our daycare program with flexible timing options."
      }
    },
    {
      "@type": "Question",
      "name": "What board tuition classes do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer tuition classes for CBSE, ICSE, and Maharashtra State Board for Classes 1-8."
      }
    },
    {
      "@type": "Question",
      "name": "Are you located near any landmark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we're located near D'Mart Ready, Kharadi on Tulaja Bhawani Nagar."
      }
    }
  ]
}

// Local Service Area Schema
export const localServiceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "serviceArea": [
    {
      "@type": "City",
      "name": "Kharadi"
    },
    {
      "@type": "City",
      "name": "Pune"
    }
  ]
}

export const PAGE_SEO: Record<string, SEOMeta> = {
  home: buildSEO({
    title: "Jaya's Classes and Day Care Center | Best Daycare & Tuition in Kharadi Pune",
    description: "Jaya's Classes and Day Care Center in Kharadi, Pune. Best daycare, play school, nursery, CBSE/ICSE/State Board tuition for Class 1-8. Near D'Mart Ready. Admissions Open!",
    canonical: '/',
    keywords: 'daycare kharadi, play school kharadi, tuition classes kharadi, day care center kharadi pune, best daycare near dmart ready',
  }),
  about: buildSEO({
    title: "About Us | Jaya's Classes and Day Care Center Kharadi Pune",
    description: "Learn about Jaya's Classes and Day Care Center — our mission, vision, teaching philosophy, and commitment to child development in Kharadi, Pune.",
    canonical: '/about',
  }),
  academics: buildSEO({
    title: "CBSE ICSE State Board Tuition Classes in Kharadi | Class 1-8 | Jaya's Classes",
    description: "Expert tuition coaching for Class 1 to 8 in Kharadi, Pune. CBSE, ICSE and Maharashtra State Board. Foundation & Confidence building for Class 1-4, Core studies for Class 5-8.",
    canonical: '/academics',
    keywords: 'tuition classes kharadi, CBSE tuition kharadi, ICSE tuition kharadi, state board classes kharadi',
  }),
  daycare: buildSEO({
    title: "Best Day Care Center in Kharadi Pune | Near D'Mart Ready | Jaya's",
    description: "Safe, hygienic, child-centric day care center in Kharadi near D'Mart Ready. Fine & gross motor skills, interactive learning, emotional development. Flexible timings for working parents.",
    canonical: '/daycare',
    keywords: 'day care kharadi, daycare near dmart ready, child care kharadi pune',
  }),
  admissions: buildSEO({
    title: "Admissions Open 2024-25 | Jaya's Classes and Day Care Center Kharadi",
    description: "Apply for admissions at Jaya's Classes and Day Care Center, Kharadi Pune. Enrol your child for daycare, play school or tuition classes. Limited seats available!",
    canonical: '/admissions',
  }),
  contact: buildSEO({
    title: "Contact Jaya's Classes and Day Care Center | Kharadi Pune",
    description: "Contact Jaya's Classes and Day Care Center in Kharadi, Pune. Call +91 7869008525 or WhatsApp for admissions and enquiries. Located near D'Mart Ready, Kharadi.",
    canonical: '/contact',
  }),
  faq: buildSEO({
    title: "FAQ | Jaya's Classes and Day Care Center Kharadi Pune",
    description: "Frequently asked questions about Jaya's Classes and Day Care Center in Kharadi, Pune — admissions, fees, timings, subjects, daycare and more.",
    canonical: '/faq',
  }),
  testimonials: buildSEO({
    title: "Parent Testimonials & Reviews | Jaya's Classes Kharadi Pune",
    description: "Read what parents say about Jaya's Classes and Day Care Center in Kharadi, Pune. Real reviews from families who trust us with their children's education and care.",
    canonical: '/testimonials',
  }),
  blog: buildSEO({
    title: "Blog | Child Development, Education Tips & Parenting | Jaya's Classes Kharadi",
    description: "Expert articles on child development, daycare, education, CBSE/ICSE tips, and parenting from Jaya's Classes and Day Care Center, Kharadi Pune.",
    canonical: '/blog',
  }),
  gallery: buildSEO({
    title: "Gallery | Jaya's Classes and Day Care Center Kharadi Pune",
    description: "See our facilities, classrooms, daycare rooms and activities at Jaya's Classes and Day Care Center in Kharadi, Pune.",
    canonical: '/gallery',
  }),
  // Landing Pages
  playSchool: buildSEO({
    title: "Best Play School in Kharadi Pune | Playgroup Classes | Jaya's Classes",
    description: "Premium play school & playgroup in Kharadi, Pune. Age-appropriate activities, music, art, motor skills development. Enroll your child today near D'Mart Ready.",
    canonical: '/play-school-kharadi',
    keywords: 'play school kharadi, playgroup kharadi, nursery kharadi, preschool kharadi pune',
  }),
  daycareKharadi: buildSEO({
    title: "Best Day Care Center in Kharadi Pune | Safe, Hygienic, Nurturing | Jaya's",
    description: "Premium daycare in Kharadi Pune near D'Mart Ready. Safe, hygienic, structured environment with flexible timing. Half-day, full-day & after-school care available.",
    canonical: '/day-care-center-kharadi',
    keywords: 'daycare kharadi, day care center kharadi, childcare kharadi pune, creche kharadi',
  }),
  tuitionClasses: buildSEO({
    title: "Tuition Classes in Kharadi Pune | Class 1-8 | CBSE ICSE State Board",
    description: "Expert tuition classes for Class 1-8 in Kharadi, Pune. CBSE, ICSE, Maharashtra State Board coaching. Foundation building to advanced studies.",
    canonical: '/tuition-classes-kharadi',
    keywords: 'tuition classes kharadi, home tuition kharadi, coaching classes kharadi',
  }),
  cbseTuition: buildSEO({
    title: "CBSE Tuition Classes in Kharadi Pune | Class 1-8 | Expert Coaching",
    description: "Specialized CBSE tuition coaching in Kharadi, Pune for Class 1-8. Qualified teachers, structured curriculum, focus on concept building & exam preparation.",
    canonical: '/cbse-tuition-kharadi',
    keywords: 'CBSE tuition kharadi, CBSE coaching kharadi, CBSE classes kharadi pune',
  }),
}
