export interface SEOMeta {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string
  noIndex?: boolean
}

export const buildSEO = (meta: SEOMeta): SEOMeta => ({
  ogImage: 'https://jayasclasses.in/og-image.jpg',
  canonical: `https://jayasclasses.in${meta.canonical || ''}`,
  ...meta,
  title: meta.title.includes("Jaya's") ? meta.title : `${meta.title} | Jaya's Classes & Day Care Center, Kharadi`,
})

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
}
