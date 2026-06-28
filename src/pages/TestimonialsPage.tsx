import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { PAGE_SEO } from '@/utils/seo'
import { TESTIMONIALS } from '@/data/testimonials'
import { BUSINESS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackWhatsAppLead } from '@/utils/analytics'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-lg ${i < count ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ t, delay }: { t: (typeof TESTIMONIALS)[0]; delay: number }) {
  const badgeColors: Record<string, string> = {
    Daycare: 'bg-secondary-100 text-secondary-700',
    Academics: 'bg-primary-100 text-primary-700',
    Both: 'bg-accent-100 text-accent-700',
  }
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <StarRating count={t.rating} />
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full font-body ${badgeColors[t.service]}`}>
          {t.service}
        </span>
      </div>
      <blockquote className="font-body text-gray-700 text-sm leading-relaxed flex-1 mb-5">
        "{t.text}"
      </blockquote>
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <div className="w-10 h-10 rounded-full bg-primary-gradient flex items-center justify-center font-bold text-white text-sm font-heading flex-shrink-0">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="font-heading font-semibold text-primary-900 text-sm">{t.name}</div>
          <div className="text-xs text-gray-500 font-body">{t.child}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsPage() {
  const avgRating = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1)

  return (
    <>
      <SEO {...PAGE_SEO.testimonials} />

      {/* Hero */}
      <section className="bg-primary-gradient py-20 text-white text-center">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-5xl mb-4">💬</div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-3">
              What Parents Say
            </h1>
            <p className="font-body text-lg opacity-90 max-w-xl mx-auto">
              Real reviews from Kharadi families who trust Jaya's with their most precious ones
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-white border-b shadow-sm">
        <div className="container-main py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { label: 'Average Rating', value: `${avgRating} / 5.0`, icon: '⭐' },
              { label: 'Happy Families', value: `${TESTIMONIALS.length}+`, icon: '👨‍👩‍👧' },
              { label: 'Years Serving Kharadi', value: '3+', icon: '🏫' },
              { label: 'Students Enrolled', value: '200+', icon: '🎒' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-heading text-xl font-bold text-primary-900">{s.value}</div>
                <div className="text-xs text-gray-500 font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section background="light">
        <SectionHeader
          eyebrow="Parent Reviews"
          title="Trusted by Kharadi Families"
          subtitle="Every review here is from a real parent whose child attends or has attended Jaya's Classes and Day Care Center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} t={t} delay={i * 0.06} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl shadow-card p-8 text-center max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="font-heading text-2xl font-bold text-primary-900 mb-3">
            Join Our Happy Families!
          </h2>
          <p className="font-body text-gray-600 mb-6">
            Limited seats available. Enrol your child today and experience the difference at Jaya's.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/admissions" variant="primary">Apply Now →</Button>
            <Button
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
              target="_blank" rel="noopener noreferrer"
              variant="whatsapp"
              onClick={() => trackWhatsAppLead('testimonials_cta')}
            >
              💬 WhatsApp Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
