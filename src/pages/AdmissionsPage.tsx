import { useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import SEO from '@/components/ui/SEO'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { PAGE_SEO } from '@/utils/seo'
import { BUSINESS } from '@/data/constants'
import { admissionSchema, AdmissionSchema } from '@/utils/validation'
import { WHATSAPP_MESSAGES } from '@/data/constants'
import { trackFormLead, trackCallLead, trackWhatsAppLead } from '@/utils/analytics'

function FormField({
  label, name, register, error, type = 'text', options, required, placeholder, rows,
}: {
  label: string; name: string; register: ReturnType<typeof useForm<FieldValues>>['register']
  error?: string; type?: string; options?: string[]; required?: boolean
  placeholder?: string; rows?: number
}) {
  const cls = `w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-all ${error ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-secondary-400'}`
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-body">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {options ? (
        <select {...register(name)} className={cls}>
          <option value="">Select {label}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <textarea {...register(name)} rows={rows || 3} placeholder={placeholder} className={`${cls} resize-none`} />
      ) : (
        <input type={type} {...register(name)} placeholder={placeholder} className={cls} />
      )}
      {error && <p className="text-red-500 text-xs mt-1.5 font-body">{error}</p>}
    </div>
  )
}

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AdmissionSchema>({
    resolver: zodResolver(admissionSchema),
  })

  const onSubmit = async (data: AdmissionSchema) => {
    let success = false
    if (BUSINESS.web3formsKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ access_key: BUSINESS.web3formsKey, ...data }),
        })
        const json = await res.json()
        success = json.success
      } catch { /* fallback to WA */ }
    }
    trackFormLead('admission_enquiry')
    setSubmitted(true)
    if (!success) {
      toast('Sending via WhatsApp for faster response...', { icon: '💬' })
      const msg = encodeURIComponent(
        `*New Admission Enquiry*\n\n` +
        `👨‍👩‍👧 Parent: ${data.parentName}\n` +
        `👶 Child: ${data.childName} (Age: ${data.childAge})\n` +
        `📚 Class: ${data.currentClass || 'N/A'} | Board: ${data.board || 'N/A'}\n` +
        `🎯 Service: ${data.service}\n` +
        `📞 Phone: ${data.phone}\n` +
        `📧 Email: ${data.email || 'N/A'}\n` +
        `⏰ Timing: ${data.timing || 'N/A'}\n` +
        `💬 Message: ${data.message || 'N/A'}`
      )
      window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, '_blank')
    } else {
      toast.success("Enquiry submitted! We'll contact you shortly.")
    }
  }

  const reg = register as unknown as ReturnType<typeof useForm<FieldValues>>["register"]

  return (
    <>
      <SEO {...PAGE_SEO.admissions} />
      <section className="bg-[linear-gradient(135deg,#F59E0B,#D97706)] py-16 text-white text-center">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-5xl mb-4">🎉</div>
            <h1 className="font-heading text-4xl font-extrabold mb-3">Admissions Open 2026–27!</h1>
            <p className="font-body text-lg opacity-90">Fill the form below — we'll respond within a few hours</p>
          </motion.div>
        </div>
      </section>

      <Section background="light">
        <div className="max-w-2xl mx-auto" id="enquiry-form">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-2xl shadow-card p-12">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="font-heading text-2xl font-bold text-primary-900 mb-3">Thank You for Enquiring!</h2>
              <p className="font-body text-gray-600 mb-8">Your enquiry has been received. We'll contact you within a few hours.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href={`tel:${BUSINESS.phone}`} variant="primary" onClick={() => trackCallLead('admissions_ty')}>
                  📞 Call {BUSINESS.phoneDisplay}
                </Button>
                <Button href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  variant="whatsapp" onClick={() => trackWhatsAppLead('admissions_ty')}>
                  💬 WhatsApp Us
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-card p-8 space-y-5" noValidate>
              <h2 className="font-heading text-xl font-bold text-primary-900">Admission Enquiry Form</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Parent / Guardian Name" name="parentName" register={reg} error={errors.parentName?.message} required placeholder="Your full name" />
                <FormField label="Child's Name" name="childName" register={reg} error={errors.childName?.message} required placeholder="Child's full name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Child's Age" name="childAge" type="number" register={reg} error={errors.childAge?.message} required placeholder="e.g. 5" />
                <FormField label="Current Class / Grade" name="currentClass" register={reg}
                  options={['Nursery / LKG / UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Daycare (Any Age)']} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="School Board" name="board" register={reg}
                  options={['CBSE', 'ICSE', 'Maharashtra State Board', 'Not Yet in School']} />
                <FormField label="Service Interested In" name="service" register={reg} required error={errors.service?.message}
                  options={['Day Care', 'Play School / Nursery', 'Tuition — Class 1–4', 'Tuition — Class 5–8', 'Daycare + Tuition (Both)']} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Mobile Number" name="phone" type="tel" register={reg} error={errors.phone?.message} required placeholder="10-digit mobile number" />
                <FormField label="Email Address" name="email" type="email" register={reg} placeholder="your@email.com (optional)" />
              </div>
              <FormField label="Preferred Timing" name="timing" register={reg}
                options={['Morning (8–11 AM)', 'Afternoon (12–3 PM)', 'Evening (4–7 PM)', 'Full Day Daycare', 'Flexible — Please Advise']} />
              <FormField label="Any Additional Message" name="message" type="textarea" register={reg} placeholder="Any specific requirements or questions..." rows={3} />
              <Button type="submit" variant="primary" size="xl" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry →'}
              </Button>
              <p className="text-xs text-gray-500 text-center font-body">
                We respect your privacy. Your details will only be used to contact you about admissions.
              </p>
            </motion.form>
          )}
        </div>
      </Section>

      <section className="bg-primary-900 py-10 text-white">
        <div className="container-main grid sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: '📞', label: 'Call Us', value: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.phone}`, onClick: () => trackCallLead('admissions_strip') },
            { icon: '💬', label: 'WhatsApp', value: 'Chat with us now', href: `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`, onClick: () => trackWhatsAppLead('admissions_strip'), external: true },
            { icon: '⏰', label: 'Hours', value: 'Mon–Sat: 8 AM – 7 PM', href: undefined },
          ].map(i => (
            <div key={i.label}>
              <div className="text-3xl mb-2">{i.icon}</div>
              <div className="font-heading font-semibold mb-1">{i.label}</div>
              {i.href ? (
                <a href={i.href} onClick={i.onClick} target={i.external ? '_blank' : undefined}
                  rel={i.external ? 'noopener noreferrer' : undefined}
                  className="text-secondary-300 hover:text-white font-body text-sm">{i.value}</a>
              ) : (
                <span className="text-secondary-300 font-body text-sm">{i.value}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
