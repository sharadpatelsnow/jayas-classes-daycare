import { BUSINESS } from '@/data/constants'

export interface AdmissionFormData {
  parentName: string
  childName: string
  childAge: string
  currentClass: string
  board: string
  service: string
  phone: string
  email: string
  timing: string
  message: string
}

export const buildWhatsAppMessage = (data: AdmissionFormData): string => {
  return encodeURIComponent(
    `*New Admission Enquiry — Jaya's Classes & Day Care*\n\n` +
    `👨‍👩‍👧 *Parent:* ${data.parentName}\n` +
    `👶 *Child:* ${data.childName} (Age: ${data.childAge})\n` +
    `📚 *Class:* ${data.currentClass || 'N/A'} | *Board:* ${data.board || 'N/A'}\n` +
    `🎯 *Interested In:* ${data.service}\n` +
    `📞 *Phone:* ${data.phone}\n` +
    `📧 *Email:* ${data.email || 'N/A'}\n` +
    `⏰ *Preferred Timing:* ${data.timing || 'N/A'}\n` +
    `💬 *Message:* ${data.message || 'N/A'}`
  )
}

export const submitToWeb3Forms = async (
  data: AdmissionFormData,
  accessKey: string
): Promise<{ ok: boolean; message: string }> => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Admission Enquiry — ${data.childName} (${data.service})`,
        from_name: data.parentName,
        ...data,
        to_email: BUSINESS.email,
      }),
    })
    const result = await response.json()
    return { ok: result.success, message: result.message }
  } catch {
    return { ok: false, message: 'Network error' }
  }
}

export const openWhatsAppLead = (data: AdmissionFormData) => {
  const msg = buildWhatsAppMessage(data)
  window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, '_blank')
}
