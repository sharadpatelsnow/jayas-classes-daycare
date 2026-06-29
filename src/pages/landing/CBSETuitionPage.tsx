import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { buildSEO } from '@/utils/seo'
import { BUSINESS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackCallLead, trackWhatsAppLead } from '@/utils/analytics'

const seo = buildSEO({
  title: "CBSE Tuition in Kharadi Pune | Class 1–8 | Expert Coaching | Jaya's Classes",
  description: "Expert CBSE tuition and coaching in Kharadi, Pune for Class 1–8. Experienced teachers, small batches, personalised attention, chapter-wise practice. Near Toy Mall. Admissions Open!",
  canonical: '/cbse-tuition-kharadi',
  keywords: 'CBSE tuition kharadi, CBSE coaching kharadi pune, CBSE classes kharadi near me, best CBSE tutor kharadi',
})

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

const CBSE_FEATURES = [
  { icon: '📐', title: 'CBSE Maths Mastery', desc: 'Conceptual understanding with daily practice. From basic operations (Class 1) to algebra, geometry, statistics (Class 8).' },
  { icon: '🔬', title: 'CBSE Science Excellence', desc: 'Deep understanding of EVS (Class 1–5), and Physics/Chemistry/Biology concepts (Class 6–8).' },
  { icon: '📖', title: 'CBSE English Proficiency', desc: 'Grammar, comprehension, writing, and literature — aligned exactly to the CBSE syllabus.' },
  { icon: '🌐', title: 'Social Science', desc: 'History, Geography, Civics and Economics made engaging through discussions, maps, and timelines.' },
  { icon: '🇮🇳', title: 'Hindi & Marathi', desc: 'Language skills for CBSE students — reading, writing, grammar and composition.' },
  { icon: '📝', title: 'Exam Preparation', desc: 'CBSE-pattern questions, chapter tests, full revision, previous year papers and exam strategies.' },
]

const CLASSES = [
  { range: 'Class 1–2', focus: 'Foundations', topics: ['Reading & phonics', 'Number sense', 'Basic writing', 'EVS exploration', 'Oral expression'] },
  { range: 'Class 3–4', focus: 'Developing Skills', topics: ['All 4 operations', 'Grammar basics', 'Science concepts', 'Social Studies', 'Hindi/Marathi'] },
  { range: 'Class 5–6', focus: 'Core Subjects', topics: ['Fractions, decimals', 'Science chapters', 'History & Geography', 'Essay writing', 'All languages'] },
  { range: 'Class 7–8', focus: 'Board Foundation', topics: ['Algebra & geometry', 'Physics/Chemistry/Biology', 'Social Science in depth', 'Literature analysis', 'Exam skills'] },
]

export default function CBSETuitionPage() {
  return (
    <>
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#1d4ed8_0%,#1E3A8A_100%)] py-24 text-white">
        <div className="container-main max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold font-body mb-6">
              📘 Specialised CBSE Coaching — Kharadi, Pune
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Expert CBSE Tuition in Kharadi
            </h1>
            <p className="font-body text-xl opacity-90 mb-3">
              Class 1 to 8 · All CBSE Subjects · Small Batches · Proven Results
            </p>
            <p className="font-body opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
              At Jaya's Classes and Day Care Center, Kharadi — our experienced CBSE tutors deliver personalised coaching that transforms understanding and confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/admissions" variant="accent" size="xl">Enrol Now →</Button>
              <Button href={`tel:${BUSINESS.phone}`} variant="outline"
                onClick={() => trackCallLead('cbse_landing')}
                className="border-white text-white hover:bg-white hover:text-primary-900">
                📞 {BUSINESS.phoneDisplay}
              </Button>
              <Button
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.academics)}`}
                target="_blank" rel="noopener noreferrer" variant="whatsapp"
                onClick={() => trackWhatsAppLead('cbse_landing')}>
                💬 WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Section background="light">
        {/* Subject features */}
        <SectionHeader eyebrow="CBSE Subjects" title="All CBSE Subjects, Expertly Taught"
          subtitle="Our CBSE-specialist tutors cover every subject with depth, clarity and board-specific expertise" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {CBSE_FEATURES.map((f, i) => (
            <motion.div key={f.title} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all border-l-4 border-primary-900">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-heading font-bold text-primary-900 mb-2">{f.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Class-wise coverage */}
        <SectionHeader eyebrow="Class-Wise" title="What We Cover in Each Class Group" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CLASSES.map((c, i) => (
            <motion.div key={c.range} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-card transition-shadow">
              <div className="font-heading text-lg font-extrabold text-primary-900">{c.range}</div>
              <div className="text-xs font-semibold text-secondary-600 mb-3 font-body">{c.focus}</div>
              <ul className="space-y-1.5">
                {c.topics.map(t => (
                  <li key={t} className="flex items-center gap-1.5 font-body text-xs text-gray-700">
                    <span className="text-secondary-500 font-bold">•</span>{t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* USP strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { icon: '👩‍🏫', title: 'Expert Teachers', sub: 'CBSE-specialist tutors' },
            { icon: '👥', title: 'Small Batches', sub: 'Max 12 students/batch' },
            { icon: '📊', title: 'Regular Tests', sub: 'Chapter-wise assessments' },
            { icon: '📣', title: 'Parent Updates', sub: 'WhatsApp progress reports' },
          ].map(u => (
            <div key={u.title} className="bg-white rounded-xl p-5 shadow-soft text-center">
              <div className="text-3xl mb-2">{u.icon}</div>
              <div className="font-heading font-bold text-primary-900 text-sm">{u.title}</div>
              <div className="font-body text-xs text-gray-500">{u.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-primary-50 rounded-2xl p-8 mb-8 text-center">
          <div className="text-3xl mb-3">💬</div>
          <blockquote className="font-body text-gray-700 italic text-base leading-relaxed max-w-2xl mx-auto mb-4">
            "My son's CBSE grades went from C to A in just one term at Jaya's Classes. The tutor really understands the CBSE way of teaching and assessment. We are so grateful!"
          </blockquote>
          <div className="font-heading font-semibold text-primary-900">— Priya Sharma, Kharadi</div>
          <div className="font-body text-xs text-gray-500">Parent of Class 3 CBSE Student</div>
        </div>

        {/* CTA */}
        <div className="bg-primary-gradient rounded-2xl p-10 text-white text-center">
          <h2 className="font-heading text-2xl font-bold mb-3">Ready to Excel in CBSE?</h2>
          <p className="font-body opacity-90 mb-6">Join Jaya's Classes in Kharadi and watch your child's CBSE performance transform.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/admissions" variant="accent" size="xl">Apply Now →</Button>
            <Button href={`tel:${BUSINESS.phone}`} variant="outline"
              onClick={() => trackCallLead('cbse_cta')}
              className="border-white text-white hover:bg-white hover:text-primary-900">
              📞 Call: {BUSINESS.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
