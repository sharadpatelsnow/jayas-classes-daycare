import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { buildSEO } from '@/utils/seo'
import { BUSINESS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackCallLead, trackWhatsAppLead } from '@/utils/analytics'

const seo = buildSEO({
  title: "Best Play School in Kharadi Pune | Nursery & LKG UKG | Jaya's Classes",
  description: "Top-rated play school and nursery in Kharadi, Pune. Structured, activity-based early learning for children aged 1.5–5 years. Near Toy Mall Kharadi. Admissions Open!",
  canonical: '/play-school-kharadi',
  keywords: 'play school kharadi, nursery kharadi pune, LKG UKG kharadi, preschool kharadi near dmart',
})

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

export default function PlaySchoolPage() {
  const features = [
    { icon: '🎨', title: 'Creative Activities', desc: 'Art, craft, colouring and drawing to develop fine motor skills and self-expression.' },
    { icon: '🎵', title: 'Songs & Rhymes', desc: 'Action songs, nursery rhymes and music to build language, memory and rhythm.' },
    { icon: '📖', title: 'Early Literacy', desc: 'Alphabets, phonics, and reading readiness through playful, age-appropriate methods.' },
    { icon: '🔢', title: 'Number Sense', desc: 'Counting, shapes, colours and basic numeracy built through games and activities.' },
    { icon: '🧩', title: 'Puzzle & Problem Solving', desc: 'Age-appropriate puzzles and building activities to develop logic and spatial thinking.' },
    { icon: '🤝', title: 'Social Skills', desc: 'Group activities and structured play to build sharing, empathy and cooperation.' },
  ]

  const stages = [
    { label: 'Playgroup', age: '1.5 – 2.5 Years', desc: 'Gentle introduction to structured play in a safe, loving environment. Focus on sensory exploration and routine.' },
    { label: 'Nursery', age: '2.5 – 3.5 Years', desc: 'Songs, rhymes, colours, shapes and early social skills. Building love of learning from day one.' },
    { label: 'LKG', age: '3.5 – 4.5 Years', desc: 'Letter recognition, numbers 1–20, writing basics, and school readiness activities.' },
    { label: 'UKG', age: '4.5 – 5.5 Years', desc: 'Reading readiness, phonics, writing letters and numbers, Class 1 preparation.' },
  ]

  return (
    <>
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#14B8A6_0%,#0F766E_100%)] py-24 text-white">
        <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold font-body mb-6">
              🎉 Admissions Open 2026–27
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Best Play School in Kharadi, Pune
            </h1>
            <p className="font-body text-lg opacity-90 mb-8 leading-relaxed">
              A joyful, structured early learning environment for children aged 1.5 to 5.5 years. Activity-based, child-centric, and located near Toy Mall, Kharadi.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/admissions" variant="accent" size="xl">Enrol Now →</Button>
              <Button href={`tel:${BUSINESS.phone}`} variant="outline"
                onClick={() => trackCallLead('playschool_landing')}
                className="border-white text-white hover:bg-white hover:text-secondary-700">
                📞 Call Now
              </Button>
              <Button
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
                target="_blank" rel="noopener noreferrer"
                variant="whatsapp" size="xl"
                onClick={() => trackWhatsAppLead('playschool_landing')}
              >
                💬 WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">🏫</div>
              <h2 className="font-heading text-xl font-bold mb-4">Why Jaya's Play School?</h2>
              <ul className="space-y-3">
                {['Trained, caring, patient teachers', 'Small groups — individual attention', 'Structured daily routine', 'Safe, hygienic, child-proofed facility', 'Regular parent updates via WhatsApp', 'Near D\'Mart Ready, Kharadi — easy access', 'Flexible morning & afternoon batches'].map(p => (
                  <li key={p} className="flex items-center gap-2 font-body text-sm">
                    <span className="text-accent-300 font-bold">✓</span>{p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/20">
                <p className="font-body text-sm opacity-90">📍 Saffron Glory, Second Floor, Above Swasthya Clinic, Near Toy Mall, Kharadi, Pune</p>
                <p className="font-body text-sm opacity-90 mt-1">📞 {BUSINESS.phoneDisplay}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Age Groups */}
      <Section background="light">
        <SectionHeader eyebrow="Programs" title="Play School Programs by Age" subtitle="Curriculum tailored to every developmental stage from 1.5 to 5.5 years" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stages.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft border-t-4 border-secondary-500 hover:shadow-card transition-shadow">
              <div className="font-heading text-xl font-extrabold text-secondary-600 mb-1">{s.label}</div>
              <div className="text-xs font-semibold text-accent-600 mb-3 font-body">Age: {s.age}</div>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <SectionHeader eyebrow="Activities" title="What Your Child Learns & Does" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div key={f.title} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-soft flex gap-4">
              <div className="text-3xl flex-shrink-0">{f.icon}</div>
              <div>
                <h3 className="font-heading font-bold text-primary-900 text-sm mb-1">{f.title}</h3>
                <p className="font-body text-gray-600 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary-gradient rounded-2xl p-10 text-white text-center">
          <h2 className="font-heading text-2xl font-bold mb-3">Give Your Child the Best Start in Kharadi!</h2>
          <p className="font-body opacity-90 mb-6">Limited seats available. Enquire today to secure your child's place at Jaya's Play School.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/admissions" variant="accent" size="xl">Apply for Admission →</Button>
            <Button href={`tel:${BUSINESS.phone}`} variant="outline"
              onClick={() => trackCallLead('playschool_cta')}
              className="border-white text-white hover:bg-white hover:text-primary-900">
              📞 {BUSINESS.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
