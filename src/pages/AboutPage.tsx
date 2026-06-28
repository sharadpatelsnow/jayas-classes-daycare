// ──── AboutPage ────────────────────────────────────────────────────────────────
import SEO from '@/components/ui/SEO'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { PAGE_SEO } from '@/utils/seo'
import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

function PageHero({ title, subtitle, gradient = 'bg-primary-gradient' }: { title: string; subtitle: string; gradient?: string }) {
  return (
    <section className={`${gradient} py-20 text-white text-center`}>
      <div className="container-main">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-3">{title}</h1>
          <p className="font-body text-lg opacity-90 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}

export function AboutPage() {
  const sections = [
    { icon: '🎯', title: 'Our Mission', content: "To provide every child in Kharadi with a safe, nurturing, and stimulating environment where they can learn, grow, and thrive — academically, emotionally, and socially. We believe every child deserves personalised attention, consistent encouragement, and the tools to build confidence that lasts a lifetime. Our mission is not just to teach — it is to inspire." },
    { icon: '🌟', title: 'Our Vision', content: "To be Kharadi's most trusted and impactful educational and daycare institution — where parents feel completely at peace knowing their children are safe, loved, and learning. We envision a community where strong academic foundations and comprehensive care combine to create tomorrow's confident, compassionate, and capable leaders." },
    { icon: '📚', title: 'Our Learning Philosophy', content: "We follow a child-centric, interactive approach. Learning at Jaya's is never about rote memorisation — it's about understanding, curiosity, and application. We use visual aids, storytelling, group activities, and hands-on practice to make every concept come alive. We calibrate to each child's pace, ensuring no child is left behind and no child is held back." },
    { icon: '💛', title: 'Child Development Approach', content: "We see each child as a unique individual with their own pace, strengths, and learning style. Our curriculum balances cognitive development (reading, writing, numeracy) with physical development (fine and gross motor skills), emotional intelligence, and social skills. We deliberately build the habits, mindsets, and competencies that serve children throughout their entire lives." },
    { icon: '🤝', title: 'Parent Partnership', content: "Parents are our most important partners — always. We maintain open, honest communication, provide regular progress updates, and actively welcome parent input. Our flexible scheduling accommodates working parents, and our daycare gives families the peace of mind they need. When parents and educators are aligned, children thrive. This is the Jaya's partnership." },
  ]
  return (
    <>
      <SEO {...PAGE_SEO.about} />
      <PageHero title="About Jaya's Classes" subtitle="Nurturing young minds with love, knowledge and comprehensive care in Kharadi, Pune since 2022" />
      <Section background="white">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((s, i) => (
            <motion.div key={s.title} className="flex gap-6" variants={fadeUp} initial="hidden"
              whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-5xl flex-shrink-0">{s.icon}</div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary-900 mb-3">{s.title}</h2>
                <p className="font-body text-gray-700 leading-relaxed">{s.content}</p>
              </div>
            </motion.div>
          ))}
          <div className="bg-primary-50 rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">Ready to Join Our Family?</h3>
            <p className="font-body text-gray-600 mb-6">Experience the difference of truly child-centric education and care.</p>
            <Button href="/admissions" variant="primary">Apply for Admission →</Button>
          </div>
        </div>
      </Section>
    </>
  )
}

export function AcademicsPage() {
  const batches = [
    {
      title: 'Class 1–4: Foundation Batch', subtitle: 'Foundation & Confidence Building', color: '#14B8A6',
      points: ['Strong roots in all core subjects', 'Confidence-boosting activities daily', 'Reading fluency development', 'Neat writing and handwriting skills', 'Creative & critical thinking exercises', 'Homework completion support', 'Nurturing, encouraging environment'],
    },
    {
      title: 'Class 5–8: Advanced Batch', subtitle: 'Core & Detailed Studies + Exam Prep', color: '#1E3A8A',
      points: ['Deep-dive subject coaching', 'Mastery through systematic practice', 'Chapter-wise tests & revision', 'CBSE / ICSE / State Board focused', 'Exam strategy & paper solving', 'Academic doubt-clearing sessions', 'Parent progress updates'],
    },
  ]
  return (
    <>
      <SEO {...PAGE_SEO.academics} />
      <PageHero title="Academic Classes" subtitle="Expert tuition for Classes 1–8 | CBSE · ICSE · Maharashtra State Board" gradient="bg-dark-gradient" />
      <Section background="light">
        <SectionHeader title="Coaching for Every Board & Every Grade" eyebrow="Academics" />
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['CBSE Board', 'ICSE Board', 'Maharashtra State Board'].map(b => (
            <div key={b} className="px-6 py-3 rounded-2xl font-bold text-white text-sm bg-primary-900 shadow-soft">{b}</div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {batches.map((b, i) => (
            <motion.div key={b.title} className="rounded-2xl overflow-hidden shadow-card" variants={fadeUp}
              initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="p-6 text-white" style={{ background: b.color }}>
                <h2 className="font-heading text-xl font-bold">{b.title}</h2>
                <p className="opacity-90 text-sm mt-1 font-body">{b.subtitle}</p>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3">
                  {b.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm font-body text-gray-700">
                      <span className="font-bold mt-0.5 flex-shrink-0" style={{ color: b.color }}>✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mb-8">
          <h3 className="font-heading text-xl font-bold text-primary-900 mb-6 text-center">Subjects Covered</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Marathi', 'EVS', 'Computer Basics', 'General Knowledge', 'Drawing & Art'].map(s => (
              <div key={s} className="bg-white rounded-xl px-4 py-3 text-center text-sm font-medium text-primary-900 shadow-sm font-body">{s}</div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Button href="/admissions" variant="primary" size="xl">Enrol Your Child Today →</Button>
        </div>
      </Section>
    </>
  )
}

export function DaycarePage() {
  const features = [
    { icon: '🛡️', title: 'Safe & Secure', desc: 'Child-proofed, CCTV-monitored spaces with professional supervision at all times.' },
    { icon: '🧼', title: 'Hygiene First', desc: 'Regular sanitisation protocols, clean play materials, and healthy habits taught daily.' },
    { icon: '🎮', title: 'Daily Activities', desc: 'Structured play, arts & crafts, storytelling, songs, and interactive games every day.' },
    { icon: '💖', title: 'Emotional Development', desc: 'Building confidence, kindness, empathy, and healthy social relationships.' },
    { icon: '✋', title: 'Fine Motor Skills', desc: 'Drawing, colouring, puzzles, and crafts develop precision, coordination, and hand strength.' },
    { icon: '🏃', title: 'Gross Motor Skills', desc: 'Physical play, balance exercises, and movement activities for healthy, active bodies.' },
    { icon: '🧩', title: 'Interactive Learning', desc: 'Numbers, colours, shapes, and alphabets introduced through play and sensory experience.' },
    { icon: '📅', title: 'Routine Building', desc: 'Consistent daily schedule for meals, rest, play, and learning for lifelong healthy habits.' },
  ]
  const routine = [
    { time: '8:30 AM', activity: 'Welcome & Free Play' },
    { time: '9:00 AM', activity: 'Morning Circle — Songs, Calendar, Weather' },
    { time: '9:30 AM', activity: 'Learning Activity (ABCs, Numbers, Colours, Shapes)' },
    { time: '10:15 AM', activity: 'Snack Time & Hygiene Practice' },
    { time: '10:45 AM', activity: 'Arts, Crafts & Fine Motor Skills Development' },
    { time: '11:30 AM', activity: 'Outdoor / Gross Motor Play Time' },
    { time: '12:00 PM', activity: 'Lunch & Rest / Quiet Time' },
    { time: '1:30 PM', activity: 'Storytelling, Music & Creative Play' },
    { time: '2:30 PM', activity: 'Afternoon Activities & Pick-Up begins' },
  ]
  return (
    <>
      <SEO {...PAGE_SEO.daycare} />
      <PageHero title="Day Care Center" subtitle="A safe, happy & dynamic home away from home for your child in Kharadi, Pune" gradient="bg-[linear-gradient(135deg,#14B8A6,#0F766E)]" />
      <Section background="white">
        <SectionHeader eyebrow="Day Care" title="Why Parents Trust Our Daycare"
          subtitle="We provide more than childcare — we nurture the whole child in a safe, loving, stimulating environment" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f, i) => (
            <motion.div key={f.title} className="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 hover:shadow-card transition-shadow"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-heading font-bold text-primary-900 text-sm mb-2">{f.title}</h3>
              <p className="font-body text-gray-600 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="bg-secondary-50 rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-secondary-700 mb-6 text-center">A Typical Daycare Day</h2>
          <div className="space-y-3">
            {routine.map(r => (
              <div key={r.time} className="flex gap-4 items-center bg-white rounded-xl px-5 py-3 shadow-sm">
                <span className="text-sm font-bold text-secondary-600 w-20 flex-shrink-0 font-heading">{r.time}</span>
                <span className="text-sm text-gray-700 font-body">{r.activity}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Button href="/admissions" variant="secondary" size="xl">Book a Daycare Spot →</Button>
        </div>
      </Section>
    </>
  )
}

export function GalleryPage() {
  const items = [
    { emoji: '🖼️', caption: 'Interactive Learning Classroom', category: 'Classroom' },
    { emoji: '🎨', caption: 'Arts & Crafts Session', category: 'Activities' },
    { emoji: '🏫', caption: 'Welcome Area & Reception', category: 'Facility' },
    { emoji: '📚', caption: 'Reading Corner', category: 'Classroom' },
    { emoji: '🧩', caption: 'Motor Skills Play Area', category: 'Play Area' },
    { emoji: '🌈', caption: 'Colorful Learning Walls', category: 'Classroom' },
    { emoji: '🎵', caption: 'Music & Rhymes Time', category: 'Activities' },
    { emoji: '🍎', caption: 'Snack & Nutrition Time', category: 'Daycare' },
    { emoji: '🧸', caption: 'Cozy Rest Area', category: 'Daycare' },
    { emoji: '⚽', caption: 'Outdoor Play Session', category: 'Play Area' },
    { emoji: '✏️', caption: 'Writing Practice', category: 'Academics' },
    { emoji: '🔬', caption: 'Science Exploration', category: 'Academics' },
  ]
  return (
    <>
      <SEO {...PAGE_SEO.gallery} />
      <PageHero title="Gallery" subtitle="A glimpse into the joyful, nurturing world of Jaya's Classes and Day Care Center" />
      <Section background="light">
        <SectionHeader eyebrow="Our Space" title="See Our Facilities & Activities" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div key={i} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <div className="aspect-square flex items-center justify-center text-8xl bg-gradient-to-br from-primary-50 to-secondary-50">
                {item.emoji}
              </div>
              <div className="p-3 text-center">
                <p className="font-body text-sm text-gray-700 font-medium">{item.caption}</p>
                <span className="text-xs text-secondary-600 font-body">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
          <p className="font-body text-gray-600 mb-4">Want to see our facility in person? We welcome visits!</p>
          <Button href="/contact" variant="primary">Schedule a Visit →</Button>
        </div>
      </Section>
    </>
  )
}

export default AboutPage
