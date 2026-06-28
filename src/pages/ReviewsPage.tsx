import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { buildSEO } from '@/utils/seo'
import { TESTIMONIALS } from '@/data/testimonials'
import { BUSINESS } from '@/data/constants'
import { trackWhatsAppLead } from '@/utils/analytics'

const seo = buildSEO({
  title: "Reviews | Jaya's Classes and Day Care Center Kharadi Pune",
  description: "Read parent reviews for Jaya's Classes and Day Care Center, Kharadi. Rated 4.9/5 by 47+ families. Leave your own review on Google.",
  canonical: '/reviews',
})

const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=ChIJ...`

export default function ReviewsPage() {
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1)

  return (
    <>
      <SEO {...seo} />
      {/* Review schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS.name,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: avg,
          reviewCount: TESTIMONIALS.length,
          bestRating: '5',
        },
        review: TESTIMONIALS.slice(0, 5).map(t => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: t.name },
          reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: '5' },
          reviewBody: t.text,
          datePublished: t.date,
        })),
      })}} />

      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#F59E0B_0%,#D97706_100%)] py-20 text-white text-center">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-5xl mb-4">⭐</div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-2">
              Rated {avg} / 5.0
            </h1>
            <p className="font-body text-xl mb-1 opacity-90">by {TESTIMONIALS.length}+ happy Kharadi families</p>
            <p className="font-body opacity-80 text-sm">Jaya's Classes and Day Care Center, Kharadi, Pune</p>
          </motion.div>
        </div>
      </section>

      <Section background="light">
        <SectionHeader eyebrow="Reviews" title="What Parents Are Saying" />

        {/* Rating breakdown */}
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-card p-6 mb-12 text-center">
          <div className="font-heading text-5xl font-extrabold text-primary-900 mb-1">{avg}</div>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-amber-400">★</span>
            ))}
          </div>
          <p className="font-body text-gray-500 text-sm">{TESTIMONIALS.length} reviews</p>
          {[5, 4, 3].map(star => {
            const count = TESTIMONIALS.filter(t => t.rating === star).length
            const pct = Math.round((count / TESTIMONIALS.length) * 100)
            return (
              <div key={star} className="flex items-center gap-3 mt-2">
                <span className="text-xs text-gray-500 w-4 font-body">{star}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-xs text-gray-500 w-6 font-body">{pct}%</span>
              </div>
            )
          })}
        </div>

        {/* All testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 flex flex-col"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => <span key={j} className="text-amber-400 text-lg">★</span>)}
              </div>
              <p className="font-body text-gray-700 text-sm leading-relaxed flex-1 mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3 border-t pt-3">
                <div className="w-9 h-9 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold text-sm font-heading flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-primary-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 font-body">{t.child}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leave a review CTA */}
        <div className="bg-white rounded-2xl shadow-card p-8 text-center max-w-xl mx-auto">
          <div className="text-4xl mb-4">🌟</div>
          <h2 className="font-heading text-xl font-bold text-primary-900 mb-2">
            Are You a Jaya's Family?
          </h2>
          <p className="font-body text-gray-600 mb-6 text-sm">
            Share your experience and help other Kharadi parents find the right place for their children!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href={GOOGLE_REVIEW_URL}
              target="_blank" rel="noopener noreferrer"
              variant="accent"
            >
              ⭐ Leave a Google Review
            </Button>
            <Button
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I'd like to share my feedback about Jaya's Classes!")}`}
              target="_blank" rel="noopener noreferrer"
              variant="whatsapp"
              onClick={() => trackWhatsAppLead('reviews_cta')}
            >
              💬 Share on WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
