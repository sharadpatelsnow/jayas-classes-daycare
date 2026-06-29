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
  "description": "Premium daycare, play school and tuition classes for Class 1-10 in Kharadi, Pune",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Saffron Glory, Second Floor, Above Swasthya Clinic, Near Toy Mall",
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
        "text": "Yes, we're located at Saffron Glory, Second Floor, above Swasthya Clinic, near Toy Mall in Kharadi."
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
    title: "Jaya's Classes and Day Care Center | Best Tuition in Kharadi Pune | Highly Recommended",
    description: "Best tuition center in Kharadi, Pune with highly recommended tutors. Premium institute for kids coaching Class 1-10. CBSE/ICSE/State Board. Concept based learning. Professional coaching center. Student success stories. Admissions Open!",
    canonical: '/',
    keywords: 'best tuition center kharadi, highly recommended tutors pune, tuition classes kharadi, professional coaching center kharadi, concept based learning center, personalized mentoring kids',
  }),
  about: buildSEO({
    title: "About Us | Jaya's Classes and Day Care Center Kharadi Pune",
    description: "Learn about Jaya's Classes and Day Care Center — our mission, vision, teaching philosophy, and commitment to child development in Kharadi, Pune.",
    canonical: '/about',
  }),
  academics: buildSEO({
    title: "Best Tuition Classes in Kharadi | Class 1-10 | CBSE ICSE State Board | Jaya's",
    description: "Expert CBSE/ICSE tuition coaching for Class 1-10 in Kharadi. Concept based learning, personalized mentoring, small batches. Class 9-10 with special focus on Maths and Science. Top rated kids tuition. Professional coaching center near Toy Mall.",
    canonical: '/academics',
    keywords: 'best tuition center kharadi, CBSE tuition kharadi, concept based learning, personalized mentoring, class 9-10 maths science coaching, euro school kharadi tuition',
  }),
  daycare: buildSEO({
    title: "Best Day Care Center in Kharadi Pune | Near Toy Mall | Jaya's",
    description: "Safe, hygienic, child-centric day care center in Kharadi near Toy Mall. Fine & gross motor skills, interactive learning, emotional development. Flexible timings for working parents.",
    canonical: '/daycare',
    keywords: 'day care kharadi, best kids classes kharadi, child care center kharadi pune, safe educational hub near toy mall, after school care kharadi',
  }),
  admissions: buildSEO({
    title: "Admissions Open 2024-25 | Jaya's Classes and Day Care Center Kharadi",
    description: "Apply for admissions at Jaya's Classes and Day Care Center, Kharadi Pune. Enrol your child for daycare, play school or tuition classes. Limited seats available!",
    canonical: '/admissions',
  }),
  contact: buildSEO({
    title: "Contact Jaya's Classes and Day Care Center | Kharadi Pune",
    description: "Contact Jaya's Classes and Day Care Center in Kharadi, Pune. Call +91 7869008525 or WhatsApp for admissions and enquiries. Located near Toy Mall, Kharadi.",
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
    description: "Premium play school & playgroup in Kharadi, Pune. Age-appropriate activities, music, art, motor skills development. Enroll your child today near Toy Mall.",
    canonical: '/play-school-kharadi',
    keywords: 'play school kharadi, playgroup kharadi, nursery kharadi, preschool kharadi pune',
  }),
  daycareKharadi: buildSEO({
    title: "Best Day Care Center in Kharadi Pune | Safe, Hygienic, Nurturing | Jaya's",
    description: "Premium daycare in Kharadi Pune near Toy Mall. Safe, hygienic, structured environment with flexible timing. Half-day, full-day & after-school care available.",
    canonical: '/day-care-center-kharadi',
    keywords: 'daycare kharadi, day care center kharadi, childcare kharadi pune, creche kharadi',
  }),
  tuitionClasses: buildSEO({
    title: "Tuition Classes in Kharadi Pune | Class 1-10 | CBSE ICSE State Board",
    description: "Expert tuition classes for Class 1-10 in Kharadi, Pune. CBSE, ICSE, Maharashtra State Board coaching. Class 9-10 with special focus on Maths and Science.",
    canonical: '/tuition-classes-kharadi',
    keywords: 'tuition classes kharadi, home tuition kharadi, coaching classes kharadi',
  }),
  cbseTuition: buildSEO({
    title: "CBSE Tuition Classes in Kharadi Pune | Class 1-10 | Expert Coaching",
    description: "Specialized CBSE tuition coaching in Kharadi, Pune for Class 1-10. Qualified teachers, structured curriculum, focus on concept building & exam preparation. Class 9-10 Maths and Science specialization.",
    canonical: '/cbse-tuition-kharadi',
    keywords: 'CBSE tuition kharadi, CBSE coaching kharadi, CBSE classes kharadi pune',
  }),
}
