import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { buildSEO } from '@/utils/seo'
import { BUSINESS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackCallLead, trackWhatsAppLead, trackDirectionLead } from '@/utils/analytics'

const seo = buildSEO({
  title: "Best Day Care Center in Kharadi Pune | Near D'Mart Ready | Jaya's",
  description: "Safe, hygienic, professional day care center in Kharadi, Pune. Near D'Mart Ready. Full-day & half-day options for children aged 1–10. Flexible timings for working parents. Admissions Open!",
  canonical: '/day-care-center-kharadi',
  keywords: "day care center kharadi, daycare near dmart ready, child care kharadi pune, best creche kharadi",
})

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

export default function DaycareKharadiPage() {
  const whyChoose = [
    { icon: '🛡️', title: 'Safe & Child-Proofed', desc: 'CCTV, secured entry, child-proofed spaces, emergency protocols and first-aid trained staff.' },
    { icon: '🧼', title: 'Immaculate Hygiene', desc: 'Regular sanitisation, clean play materials, healthy snack times, hand-washing routine.' },
    { icon: '💖', title: 'Warm & Nurturing', desc: 'Professional caregivers who genuinely love working with children. Low staff turnover, consistent faces your child trusts.' },
    { icon: '📅', title: 'Structured Routine', desc: 'Predictable daily schedule that children thrive on — learning, play, rest, meals, all balanced.' },
    { icon: '📱', title: 'Parent Updates', desc: 'Daily WhatsApp updates, photos, and open communication so you never feel out of touch.' },
    { icon: '⏰', title: 'Flexible Hours', desc: '8 AM to 7 PM — full-day and half-day options for Kharadi\'s busy working families.' },
  ]

  const plans = [
    { title: 'Half Day', hours: '8:30 AM – 1:00 PM', icon: '☀️', color: 'border-secondary-500', features: ['Morning activities', 'Learning time', 'Snack included', 'Parent pickup at 1 PM'] },
    { title: 'Full Day', hours: '8:30 AM – 7:00 PM', icon: '🌟', color: 'border-primary-900', featured: true, features: ['Full daily program', 'Lunch + 2 snacks', 'Rest time included', 'Pick-up until 7 PM', 'Ideal for working parents'] },
    { title: 'After School', hours: '1:00 PM – 7:00 PM', icon: '🌇', color: 'border-accent-500', features: ['Homework support', 'Evening snack', 'Study + play', 'Pick-up until 7 PM'] },
  ]

  return (
    <>
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#1E3A8A_0%,#14B8A6_100%)] py-24 text-white">
        <div className="container-main max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold font-body mb-6">
              📍 Near D'Mart Ready, Kharadi, Pune
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Best Day Care Center in Kharadi
            </h1>
            <p className="font-body text-xl opacity-90 mb-3">
              Safe · Hygienic · Nurturing · Structured
            </p>
            <p className="font-body opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Jaya's Day Care Center on Tulaja Bhawani Nagar, near D'Mart Ready Kharadi — the trusted choice for Kharadi's working families since 2022.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/admissions" variant="accent" size="xl">Book a Spot →</Button>
              <Button href={`tel:${BUSINESS.phone}`} variant="outline"
                onClick={() => trackCallLead('daycare_landing')}
                className="border-white text-white hover:bg-white hover:text-primary-900">
                📞 {BUSINESS.phoneDisplay}
              </Button>
              <Button
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.daycare)}`}
                target="_blank" rel="noopener noreferrer" variant="whatsapp"
                onClick={() => trackWhatsAppLead('daycare_landing')}>
                💬 WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <Section background="light">
        <SectionHeader eyebrow="Why Jaya's" title="Why Kharadi Parents Trust Our Daycare"
          subtitle="We provide more than supervision — we nurture your child's full development in a loving, stimulating environment" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {whyChoose.map((w, i) => (
            <motion.div key={w.title} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all">
              <div className="text-3xl mb-3">{w.icon}</div>
              <h3 className="font-heading font-bold text-primary-900 mb-2">{w.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Plans */}
        <SectionHeader eyebrow="Timing Options" title="Daycare Plans for Every Family" />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-2xl p-7 shadow-soft border-t-4 ${p.color} ${p.featured ? 'ring-2 ring-primary-900 relative' : ''}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-900 text-white text-xs font-bold px-4 py-1 rounded-full font-body">
                  Most Popular
                </div>
              )}
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-1">{p.title}</h3>
              <p className="font-body text-secondary-600 text-sm font-semibold mb-4">{p.hours}</p>
              <ul className="space-y-2">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 font-body text-sm text-gray-700">
                    <span className="text-secondary-500 font-bold">✓</span>{f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl shadow-card p-8 text-center mb-8">
          <h2 className="font-heading text-xl font-bold text-primary-900 mb-3">📍 Find Us in Kharadi</h2>
          <p className="font-body text-gray-600 mb-4">Second Floor, Tulaja Bhawani Nagar, Near D'Mart Ready, Kharadi, Pune 411014</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer"
              variant="primary" onClick={trackDirectionLead}>
              📍 Get Directions
            </Button>
            <Button href="/admissions" variant="accent">Apply Now →</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
