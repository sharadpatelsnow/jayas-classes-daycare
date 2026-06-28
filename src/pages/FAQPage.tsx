import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Section from "@/components/ui/Section"
import Button from '@/components/ui/Button'
import { PAGE_SEO } from '@/utils/seo'
import { FAQS } from '@/data/faqs'
import { BUSINESS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackWhatsAppLead } from '@/utils/analytics'

const CATEGORIES = Array.from(new Set(FAQS.map(f => f.category)))

function AccordionItem({ question, answer, isOpen, onClick }: {
  question: string; answer: string; isOpen: boolean; onClick: () => void
}) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors focus-visible:ring-2 focus-visible:ring-secondary-400"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-primary-900 text-sm pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-secondary-500 text-xl flex-shrink-0 font-light"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 bg-secondary-50 border-t border-gray-100">
              <p className="font-body text-gray-700 text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory)

  const grouped = CATEGORIES.reduce<Record<string, typeof FAQS>>((acc, cat) => {
    const items = filtered.filter(f => f.category === cat)
    if (items.length) acc[cat] = items
    return acc
  }, {})

  return (
    <>
      <SEO {...PAGE_SEO.faq} />

      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#14B8A6_0%,#1E3A8A_100%)] py-20 text-white text-center">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-5xl mb-4">❓</div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-3">
              Frequently Asked Questions
            </h1>
            <p className="font-body text-lg opacity-90 max-w-xl mx-auto">
              Everything you need to know about Jaya's Classes and Day Care Center, Kharadi, Pune
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="light">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', ...CATEGORIES].map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
              className={`px-4 py-2 rounded-full text-sm font-semibold font-body transition-all ${
                activeCategory === cat
                  ? 'bg-primary-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions grouped by category */}
        <div className="max-w-3xl mx-auto space-y-10">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat}>
              <h2 className="font-heading text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-secondary-500 rounded-full block" />
                {cat}
              </h2>
              <div className="space-y-2">
                {items.map((faq, j) => {
                  const key = `${cat}-${j}`
                  return (
                    <AccordionItem
                      key={key}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === key}
                      onClick={() => setOpenIndex(openIndex === key ? null : key)}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 bg-white rounded-2xl shadow-card p-8 text-center max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🤔</div>
          <h2 className="font-heading text-xl font-bold text-primary-900 mb-2">Still have questions?</h2>
          <p className="font-body text-gray-600 mb-6 text-sm">
            Our team is happy to help. Reach out and we'll answer personally.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={`tel:${BUSINESS.phone}`} variant="primary">📞 Call Us</Button>
            <Button
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
              target="_blank" rel="noopener noreferrer"
              variant="whatsapp"
              onClick={() => trackWhatsAppLead('faq_cta')}
            >
              💬 WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
