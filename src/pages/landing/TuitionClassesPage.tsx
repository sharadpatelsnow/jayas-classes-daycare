import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { buildSEO } from '@/utils/seo'
import { BUSINESS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackCallLead, trackWhatsAppLead } from '@/utils/analytics'

const seo = buildSEO({
  title: "Best Tuition Classes in Kharadi Pune | Class 1–10 | Highly Recommended | Jaya's",
  description: "Best rated tuition and coaching center in Kharadi, Pune for Class 1–10. Highly recommended tutors. Professional coaching. CBSE, ICSE, State Board. Special focus on Maths & Science for Class 9-10. Small batches, personalised attention. Top rated kids tuition near Toy Mall.",
  canonical: '/tuition-classes-kharadi',
  keywords: 'best tuition center kharadi, highly recommended tutors, top rated kids tuition classes, professional coaching center kharadi, class 9-10 maths science coaching, personalized mentoring for kids',
})

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

const BOARDS = [
  { name: 'CBSE Board', icon: '📘', desc: 'National curriculum. Strong Science & Maths focus. Ideal for competitive exam preparation.' },
  { name: 'ICSE Board', icon: '📗', desc: 'Broad, in-depth curriculum. Strong English and analytical skills. Top private school board.' },
  { name: 'State Board', icon: '📙', desc: 'Maharashtra curriculum. Marathi language strength. Best for local university preparation.' },
]

const SUBJECTS = ['English', 'Mathematics', 'Science', 'Social Studies / EVS', 'Hindi', 'Marathi', 'Computer Basics', 'General Knowledge', 'Drawing', 'Sanskrit (optional)']

export default function TuitionClassesPage() {
  const batches = [
    {
      title: 'Foundation Batch', classes: 'Class 1 – 4', icon: '🌱',
      color: '#14B8A6', colorBg: '#F0FDFA',
      subtitle: 'Building Confidence & Strong Roots',
      points: [
        'Concept clarity over rote learning',
        'Reading fluency development',
        'Neat writing and handwriting',
        'Creative thinking exercises',
        'Confidence-building activities',
        'Homework support daily',
        'Warm, encouraging environment',
      ],
    },
    {
      title: 'Advanced Batch', classes: 'Class 5 – 8', icon: '🚀',
      color: '#1E3A8A', colorBg: '#EFF6FF',
      subtitle: 'Mastery, Depth & Exam Excellence',
      points: [
        'Chapter-by-chapter systematic coverage',
        'Concept mastery through problem practice',
        'Regular tests and revision',
        'Board-specific exam preparation',
        'Past paper solving',
        'Weak area identification & focus',
        'Parent progress reports',
      ],
    },
    {
      title: 'Premium Batch', classes: 'Class 9 – 10', icon: '⭐',
      color: '#F59E0B', colorBg: '#FFFBEB',
      subtitle: 'Board Excellence & Maths/Science Mastery',
      points: [
        'Special focus on Maths and Science',
        'Board exam pattern preparation',
        'Advanced problem-solving techniques',
        'Competitive exam foundation building',
        'Regular board-style tests',
        'Concept clarity in complex topics',
        'Personalized mentoring for excellence',
      ],
    },
  ]

  return (
    <>
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-dark-gradient py-24 text-white">
        <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
            <div className="inline-flex gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold font-body mb-6">
              🎒 Admissions Open — Limited Seats
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Best Tuition Classes in Kharadi, Pune | Class 1–10
            </h1>
            <p className="font-body text-lg opacity-90 mb-4 leading-relaxed">
              Highly recommended, professional coaching center for Class 1–10 across CBSE, ICSE, and Maharashtra State Board. Concept-based learning with personalized mentoring. Class 9-10 with special focus on Maths and Science.
            </p>
            <p className="font-body text-secondary-300 font-semibold mb-8">
              📍 Near Toy Mall, Kharadi | ⏰ Morning · Afternoon · Evening Batches
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/admissions" variant="accent" size="xl">Enrol Now →</Button>
              <Button href={`tel:${BUSINESS.phone}`} variant="outline"
                onClick={() => trackCallLead('tuition_landing')}
                className="border-white text-white hover:bg-white hover:text-primary-900">
                📞 Call: {BUSINESS.phoneDisplay}
              </Button>
              <Button
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.academics)}`}
                target="_blank" rel="noopener noreferrer" variant="whatsapp"
                onClick={() => trackWhatsAppLead('tuition_landing')}>
                💬 WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="font-heading text-lg font-bold mb-5">🏆 Why Students Choose Jaya's</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '200+', label: 'Students Coached' },
                  { value: 'Class 1–10', label: 'All Classes' },
                  { value: '3 Boards', label: 'CBSE · ICSE · State' },
                  { value: '8–12', label: 'Students/Batch' },
                  { value: '3+', label: 'Years in Kharadi' },
                  { value: '4.9 ⭐', label: 'Parent Rating' },
                ].map(s => (
                  <div key={s.label} className="bg-white/15 rounded-xl p-3 text-center">
                    <div className="font-heading text-xl font-extrabold text-accent-300">{s.value}</div>
                    <div className="font-body text-xs text-white/80">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Batches */}
      <Section background="light">
        <SectionHeader eyebrow="Batches" title="Three Expert Batches for Every Stage" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {batches.map((b, i) => (
            <motion.div key={b.title} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-card">
              <div className="p-6 text-white" style={{ background: b.color }}>
                <div className="text-3xl mb-2">{b.icon}</div>
                <h2 className="font-heading text-xl font-bold">{b.title}</h2>
                <div className="font-heading font-semibold text-lg mt-1 opacity-90">{b.classes}</div>
                <p className="font-body text-sm opacity-80 mt-1">{b.subtitle}</p>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3">
                  {b.points.map(p => (
                    <li key={p} className="flex items-start gap-2 font-body text-sm text-gray-700">
                      <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: b.color }}>✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Boards */}
        <SectionHeader eyebrow="All Boards" title="Coaching for Every School Board" />
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {BOARDS.map((board, i) => (
            <motion.div key={board.name} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow text-center">
              <div className="text-4xl mb-3">{board.icon}</div>
              <h3 className="font-heading font-bold text-primary-900 mb-2">{board.name}</h3>
              <p className="font-body text-gray-600 text-sm">{board.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Subjects */}
        <div className="bg-primary-50 rounded-2xl p-8 mb-8">
          <h2 className="font-heading text-xl font-bold text-primary-900 mb-6 text-center">All Subjects Covered</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SUBJECTS.map(s => (
              <div key={s} className="bg-white rounded-xl px-4 py-2.5 text-sm font-medium text-primary-900 shadow-sm font-body">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-primary-gradient rounded-2xl p-10 text-white text-center">
          <h2 className="font-heading text-2xl font-bold mb-3">Start Your Child's Academic Journey!</h2>
          <p className="font-body opacity-90 mb-6">Limited seats in each batch. Enquire now to avoid disappointment.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/admissions" variant="accent" size="xl">Apply for Admission →</Button>
            <Button href={`tel:${BUSINESS.phone}`} variant="outline"
              onClick={() => trackCallLead('tuition_cta')}
              className="border-white text-white hover:bg-white hover:text-primary-900">
              📞 {BUSINESS.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
