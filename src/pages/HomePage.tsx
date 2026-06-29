import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '@/components/ui/SEO'
import Button from '@/components/ui/Button'
import Section, { SectionHeader } from '@/components/ui/Section'
import { PAGE_SEO } from '@/utils/seo'
import { BUSINESS, WHATSAPP_MESSAGES } from '@/data/constants'
import { TESTIMONIALS } from '@/data/testimonials'
import { trackCallLead, trackWhatsAppLead, trackDirectionLead, trackCTAClick } from '@/utils/analytics'

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

function HeroBadge({ children, color = '#1E3A8A' }: { children: string; color?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
      style={{ background: color }}>
      {children}
    </span>
  )
}

function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <HeroBadge color="#DC2626">🎉 Admissions Open 2026–27</HeroBadge>
      <HeroBadge color="#14B8A6">🛡️ Safe & Hygienic</HeroBadge>
      <HeroBadge color="#1E3A8A">📍 Above Swasthya clinic</HeroBadge>
      <HeroBadge color="#F59E0B">⭐ Kharadi's Trusted Centre</HeroBadge>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero" aria-label="Hero">
      {/* Decorative blobs */}
      {[
        { size: 400, top: -100, left: -100, color: '#1E3A8A', opacity: 0.05 },
        { size: 300, top: 200, right: -80, color: '#14B8A6', opacity: 0.07 },
        { size: 200, bottom: 100, left: 200, color: '#F59E0B', opacity: 0.06 },
      ].map((b, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: b.size, height: b.size, top: b.top, left: 'left' in b ? b.left : undefined,
            right: 'right' in b ? b.right : undefined, bottom: 'bottom' in b ? b.bottom : undefined,
            background: b.color, opacity: b.opacity, filter: 'blur(60px)' }} />
      ))}

      <div className="container-main py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
          <TrustBadges />
          <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-900 leading-tight mb-4">
            Where Academics Meet{' '}
            <span className="text-gradient">Comprehensive Care</span>
          </h1>
          <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
            Building strong foundations for learning, confidence and growth — at Kharadi's most trusted Day Care and Classes Centre, near Toy Mall.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Button href="/admissions" variant="primary" size="xl"
              onClick={() => trackCTAClick('Enquire Now', 'hero')}>
              Enquire Now →
            </Button>
            <Button href={`tel:${BUSINESS.phone}`} variant="outline" size="xl"
              onClick={() => trackCallLead('hero')}
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>}>
              Call Now
            </Button>
            <Button
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
              target="_blank" rel="noopener noreferrer"
              variant="whatsapp" size="xl"
              onClick={() => trackWhatsAppLead('hero')}>
              WhatsApp
            </Button>
          </div>
          <div className="flex flex-wrap gap-5">
            {['200+ Happy Students', 'Grades 1–10', 'CBSE · ICSE · State Board', 'Flexible Timings'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 font-body">{t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-primary-gradient p-8 text-white">
              <div className="text-5xl mb-4">🏫</div>
              <h2 className="font-heading text-2xl font-bold mb-1">Where We Play Together,</h2>
              <h2 className="font-heading text-2xl font-bold mb-1">Laugh Together &</h2>
              <h2 className="font-heading text-2xl font-bold text-accent-300 mb-4">Learn Together!</h2>
              <p className="font-body opacity-90 mb-6 text-sm leading-relaxed">
                We come from home to here and make this home with all our love and kindness.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['🛡️ Hygienic & Safe', '🧠 Interactive Learning', '💪 Motor Skills', '📅 Proper Routine'].map(t => (
                  <div key={t} className="bg-white/15 rounded-xl px-3 py-2.5 text-sm font-medium font-body backdrop-blur-sm">
                    {t}
                  </div>
                ))}
              </div>
              <Button
                href={BUSINESS.mapsUrl}
                target="_blank" rel="noopener noreferrer"
                variant="accent"
                onClick={trackDirectionLead}
                className="mt-6 w-full justify-center">
                📍 Get Directions
              </Button>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center text-2xl shadow-xl animate-float">
              🌟
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { icon: '🛡️', title: 'Safe & Hygienic', desc: 'Sanitised, child-proofed spaces with professional supervision at all times.' },
    { icon: '📚', title: 'All 3 Boards', desc: 'CBSE, ICSE, and Maharashtra State Board coaching for Classes 1–10.' },
    { icon: '🎯', title: 'Child-Centric', desc: 'Activities tailored to each child\'s pace, strengths, and learning style.' },
    { icon: '⏰', title: 'Flexible Timings', desc: 'Morning, afternoon & evening batches. Full-day daycare available.' },
    { icon: '🌱', title: 'Holistic Growth', desc: 'Fine motor, gross motor, emotional and social development every day.' },
    { icon: '📍', title: 'Easy to Find', desc: 'Saffron Glory, Second Floor above Swasthya Clinic, Near Toy Mall — convenient to reach.' },
  ]
  return (
    <Section background="light">
      <SectionHeader eyebrow="Why Choose Us" title="What Makes Jaya's Special"
        subtitle="Trusted by hundreds of Kharadi families for comprehensive child development and quality academics" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={f.title} variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-heading font-bold text-primary-900 mb-2">{f.title}</h3>
            <p className="font-body text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function ServicesSection() {
  return (
    <Section background="teal">
      <SectionHeader eyebrow="Our Services" title="Everything Your Child Needs, Under One Roof" />
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: '🎒', title: 'Day Care Center', color: '#14B8A6', to: '/daycare',
            desc: 'A safe, nurturing home-away-from-home for your child. Professional care, structured routine, and developmental activities.',
            points: ['Safe & supervised environment', 'Daily routine building', 'Fine & gross motor skills', 'Emotional development', 'Flexible timings for working parents'],
          },
          {
            icon: '📖', title: 'Academic Classes (Gr. 1–10)', color: '#1E3A8A', to: '/academics',
            desc: 'Expert coaching aligned to CBSE, ICSE & State Board. Foundations in Class 1–4, mastery in Class 5–8, and board excellence in Class 9–10.',
            points: ['Class 1–4: Foundation & Confidence', 'Class 5–8: Core & Detailed Studies', 'Class 9–10: Maths & Science Focus', 'CBSE / ICSE / State Board', 'Personalized mentoring', 'Regular practice & revision'],
          },
        ].map(s => (
          <motion.div key={s.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
            <div className="p-6 text-white" style={{ background: s.color }}>
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-heading text-xl font-bold">{s.title}</h3>
            </div>
            <div className="p-6">
              <p className="font-body text-gray-600 text-sm mb-4 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2 mb-5">
                {s.points.map(p => (
                  <li key={p} className="flex items-center gap-2 text-sm font-body text-gray-700">
                    <span className="font-bold text-secondary-500">✓</span>{p}
                  </li>
                ))}
              </ul>
              <Link to={s.to}
                className="inline-block px-5 py-2.5 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ background: s.color }}>
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function TestimonialsSection() {
  const featured = TESTIMONIALS.slice(0, 3)
  return (
    <Section background="white">
      <SectionHeader eyebrow="Parent Reviews" title="What Kharadi Parents Say"
        subtitle="Real reviews from families who trust Jaya's with their most precious ones" />
      <div className="grid md:grid-cols-3 gap-6">
        {featured.map((t, i) => (
          <motion.div key={t.id} variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow">
            <div className="flex mb-3">
              {[...Array(t.rating)].map((_, j) => <span key={j} className="text-accent-500 text-xl">★</span>)}
            </div>
            <p className="font-body text-gray-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
            <div className="flex items-center gap-3 border-t pt-4">
              <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center font-bold text-white text-sm font-heading flex-shrink-0">
                {t.name[0]}
              </div>
              <div>
                <div className="font-heading font-semibold text-primary-900 text-sm">{t.name}</div>
                <div className="text-xs text-gray-500 font-body">{t.child}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/testimonials" className="text-primary-900 font-semibold hover:underline font-body">
          Read all {TESTIMONIALS.length} reviews →
        </Link>
      </div>
    </Section>
  )
}

function CTABanner() {
  return (
    <section className="bg-primary-gradient py-16 text-white text-center">
      <div className="container-main">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Admissions Open Now!</h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Give your child the best start in Kharadi. Limited seats — enrol today and secure your spot!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/admissions" variant="accent" size="xl"
              onClick={() => trackCTAClick('Apply Now', 'cta_banner')}>
              Apply for Admission
            </Button>
            <Button
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
              target="_blank" rel="noopener noreferrer"
              variant="whatsapp" size="xl"
              onClick={() => trackWhatsAppLead('cta_banner')}>
              WhatsApp Us Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <Section background="light">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader eyebrow="Find Us" title="Located in the Heart of Kharadi"
          subtitle="Saffron Glory, Second Floor, Above Swasthya Clinic, Near Toy Mall, Kharadi, Pune — easy to find, convenient to reach" />
        <div className="rounded-2xl overflow-hidden shadow-card mb-6">
          <iframe
            src={BUSINESS.mapsEmbed}
            width="100%" height="350" style={{ border: 0 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jaya's Classes and Day Care Center Location Map"
            className="w-full" />
        </div>
        <Button href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer"
          variant="primary" onClick={trackDirectionLead}>
          📍 Open in Google Maps
        </Button>
      </div>
    </Section>
  )
}

export default function HomePage() {
  return (
    <>
      <SEO {...PAGE_SEO.home} />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTABanner />
      <MapSection />
    </>
  )
}
