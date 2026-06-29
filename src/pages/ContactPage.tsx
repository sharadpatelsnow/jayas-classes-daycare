import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import SEO from '@/components/ui/SEO'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { PAGE_SEO } from '@/utils/seo'
import { BUSINESS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackCallLead, trackWhatsAppLead, trackDirectionLead, trackFormLead } from '@/utils/analytics'

interface ContactForm {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    if (BUSINESS.web3formsKey) {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: BUSINESS.web3formsKey, ...data }),
      })
    }
    trackFormLead('contact_form')
    setSent(true)
    toast.success('Message sent! We\'ll respond shortly.')
  }

  const contactMethods = [
    {
      icon: '📞', title: 'Call Us', value: BUSINESS.phoneDisplay,
      sub: 'Mon–Sat, 8 AM – 7 PM',
      href: `tel:${BUSINESS.phone}`,
      onClick: () => trackCallLead('contact_page'),
      btnLabel: 'Call Now',
      color: 'bg-primary-900',
    },
    {
      icon: '💬', title: 'WhatsApp', value: 'Chat Instantly',
      sub: 'Fastest response',
      href: `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`,
      onClick: () => trackWhatsAppLead('contact_page'),
      btnLabel: 'Open WhatsApp',
      external: true,
      color: 'bg-[#25D366]',
    },
    {
      icon: '✉️', title: 'Email Us', value: BUSINESS.email,
      sub: 'We reply within 24h',
      href: `mailto:${BUSINESS.email}`,
      btnLabel: 'Send Email',
      color: 'bg-accent-500',
    },
    {
      icon: '📍', title: 'Visit Us', value: "Near Toy Mall, Kharadi",
      sub: BUSINESS.address.full,
      href: BUSINESS.mapsUrl,
      onClick: trackDirectionLead,
      btnLabel: 'Get Directions',
      external: true,
      color: 'bg-secondary-600',
    },
  ]

  return (
    <>
      <SEO {...PAGE_SEO.contact} />

      {/* Hero */}
      <section className="bg-primary-gradient py-20 text-white text-center">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-5xl mb-4">📬</div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-3">Contact Us</h1>
            <p className="font-body text-lg opacity-90 max-w-xl mx-auto">
              We'd love to hear from you. Reach out for admissions, enquiries, or just to say hello!
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="light">
        <SectionHeader eyebrow="Get in Touch" title="We're Here to Help" />

        {/* Contact method cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactMethods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft text-center hover:shadow-card transition-shadow"
            >
              <div className="text-4xl mb-3">{m.icon}</div>
              <h3 className="font-heading font-bold text-primary-900 mb-1">{m.title}</h3>
              <p className="font-body text-sm font-semibold text-gray-800 mb-1">{m.value}</p>
              <p className="font-body text-xs text-gray-500 mb-4">{m.sub}</p>
              <a
                href={m.href}
                onClick={m.onClick}
                target={m.external ? '_blank' : undefined}
                rel={m.external ? 'noopener noreferrer' : undefined}
                className={`inline-block px-4 py-2 rounded-xl text-white text-xs font-semibold font-body ${m.color} hover:opacity-90 transition-opacity`}
              >
                {m.btnLabel}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Form + Map side by side */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            <h2 className="font-heading text-xl font-bold text-primary-900 mb-6">Send a Message</h2>
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-lg font-bold text-primary-900 mb-2">Message Sent!</h3>
                <p className="font-body text-gray-600">We'll get back to you within a few hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {[
                  { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Full name', required: true },
                  { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Mobile number', required: true },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'Email address' },
                  { label: 'Subject', name: 'subject', type: 'text', placeholder: 'Subject of your message' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">
                      {f.label}{f.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      {...register(f.name as keyof ContactForm)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    {...register('message')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 resize-none"
                  />
                </div>
                <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </Button>
              </form>
            )}
          </div>

          {/* Map + address */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-card mb-5">
              <iframe
                src={BUSINESS.mapsEmbed}
                width="100%" height="300" style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jaya's Classes Location"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft space-y-4">
              <h3 className="font-heading font-bold text-primary-900">Visit Us</h3>
              {[
                { icon: '📍', label: 'Address', value: BUSINESS.address.full },
                { icon: '⏰', label: 'Hours', value: 'Mon–Sat: 8:00 AM – 7:00 PM | Sun: Closed' },
                { icon: '📞', label: 'Phone', value: BUSINESS.phoneDisplay },
                { icon: '✉️', label: 'Email', value: BUSINESS.email },
              ].map(r => (
                <div key={r.label} className="flex gap-3">
                  <span className="text-xl flex-shrink-0">{r.icon}</span>
                  <div>
                    <div className="font-body text-xs text-gray-400 uppercase tracking-wide">{r.label}</div>
                    <div className="font-body text-sm text-gray-700">{r.value}</div>
                  </div>
                </div>
              ))}
              <Button
                href={BUSINESS.mapsUrl}
                target="_blank" rel="noopener noreferrer"
                variant="secondary"
                onClick={trackDirectionLead}
                className="w-full justify-center"
              >
                📍 Open in Google Maps
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
