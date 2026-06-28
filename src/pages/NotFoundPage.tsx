import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import { buildSEO } from '@/utils/seo'
import Button from '@/components/ui/Button'
import { NAV_ITEMS } from '@/data/constants'

const seo = buildSEO({
  title: '404 — Page Not Found | Jaya\'s Classes Kharadi',
  description: 'The page you are looking for could not be found.',
  canonical: '/404',
  noIndex: true,
})

export default function NotFoundPage() {
  return (
    <>
      <SEO {...seo} />
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="container-main text-center py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-8xl mb-6">🏫</div>
            <h1 className="font-heading text-6xl font-extrabold text-primary-900 mb-3">404</h1>
            <h2 className="font-heading text-2xl font-bold text-gray-700 mb-4">
              Oops! This page took a different path.
            </h2>
            <p className="font-body text-gray-500 mb-10 max-w-md mx-auto">
              The page you're looking for doesn't exist or may have moved. Let's get you back on track!
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button href="/" variant="primary">🏠 Go Home</Button>
              <Button href="/admissions" variant="accent">Apply for Admission</Button>
              <Button href="/contact" variant="outline">Contact Us</Button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
              {NAV_ITEMS.slice(0, 6).map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2 bg-white rounded-xl text-sm text-primary-900 font-medium font-body hover:bg-primary-50 border border-gray-200 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
