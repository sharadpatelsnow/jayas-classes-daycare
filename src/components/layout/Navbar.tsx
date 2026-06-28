import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { BUSINESS, NAV_ITEMS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackWhatsAppLead } from '@/utils/analytics'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-card' : 'bg-white/96 backdrop-blur-sm'}`}>
      <nav className="container-main flex items-center justify-between h-16 lg:h-18" aria-label="Main navigation">
        <Logo size="md" />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1" role="menubar">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              role="menuitem"
              className={`px-3 py-2 rounded-lg text-sm font-medium font-body transition-colors focus-visible:ring-2 focus-visible:ring-secondary-500 ${
                pathname === item.path
                  ? 'bg-primary-900 text-white'
                  : 'text-gray-700 hover:bg-primary-50 hover:text-primary-900'
              }`}>
              {item.label}
            </Link>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <Button
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
              target="_blank" rel="noopener noreferrer"
              onClick={() => trackWhatsAppLead('navbar')}
              variant="whatsapp" size="sm">
              💬 WhatsApp
            </Button>
            <Button href="/admissions" variant="accent" size="sm">
              Enquire Now
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(v => !v)}>
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-primary-900 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-primary-900 rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-primary-900 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container-main py-4 space-y-1">
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? 'bg-primary-900 text-white'
                      : 'text-gray-700 hover:bg-primary-50'
                  }`}>
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <Button
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => trackWhatsAppLead('mobile_menu')}
                  variant="whatsapp" fullWidth>
                  💬 WhatsApp Us
                </Button>
                <Button href="/admissions" variant="accent" fullWidth>
                  Enquire Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
