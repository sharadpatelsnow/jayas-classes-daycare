import { Link } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import { BUSINESS, NAV_ITEMS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackCallLead, trackWhatsAppLead, trackDirectionLead } from '@/utils/analytics'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-label="Footer">
      <div className="container-main pt-16 pb-28 lg:pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="md" light />
            <p className="text-gray-400 text-sm mt-4 leading-relaxed font-body">
              Kharadi's most trusted daycare and academic coaching centre. Nurturing young minds with love, knowledge and comprehensive care.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
                onClick={() => trackWhatsAppLead('footer')}
                target="_blank" rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center hover:scale-110 transition-transform text-lg">
                💬
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                onClick={() => trackCallLead('footer')}
                aria-label="Call us"
                className="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center hover:scale-110 transition-transform text-lg">
                📞
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                aria-label="Email us"
                className="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform text-lg">
                ✉️
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-300 mb-5">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-white text-sm font-body transition-colors">
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-300 mb-5">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400 font-body">
              {[
                'Day Care Center', 'Play School / Nursery', 'Tuition Class 1–4',
                'Tuition Class 5–8', 'CBSE Coaching', 'ICSE Coaching',
                'State Board Coaching', 'After School Program',
              ].map(s => (
                <li key={s}><Link to="/academics" className="hover:text-white transition-colors">• {s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-300 mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-body">
              <li className="flex gap-3">
                <span className="text-secondary-400 flex-shrink-0">📍</span>
                <span>Second Floor, Tulaja Bhawani Nagar,<br />Near D'Mart Ready, Kharadi, Pune</span>
              </li>
              <li>
                <a href={`tel:${BUSINESS.phone}`} onClick={() => trackCallLead('footer')}
                  className="flex gap-3 hover:text-white transition-colors">
                  <span className="text-secondary-400">📞</span>
                  <span>{BUSINESS.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex gap-3 hover:text-white transition-colors">
                  <span className="text-secondary-400">✉️</span>
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary-400">⏰</span>
                <span>Mon–Sat: 8:00 AM – 7:00 PM</span>
              </li>
            </ul>
            <a
              href={BUSINESS.mapsUrl}
              onClick={trackDirectionLead}
              target="_blank" rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-primary-900 rounded-xl text-xs font-semibold hover:bg-primary-800 transition-colors">
              📍 Get Directions
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs font-body text-center">
            © {new Date().getFullYear()} Jaya's Classes and Day Care Center, Kharadi, Pune. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-body text-center">
            Daycare · Play School · Nursery · CBSE · ICSE · State Board Tuition · Kharadi, Pune
          </p>
        </div>
      </div>
    </footer>
  )
}
