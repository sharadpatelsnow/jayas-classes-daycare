import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FloatingWhatsApp, StickyMobileCTA } from '@/components/layout/FloatingCTA'

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const AcademicsPage = lazy(() => import('@/pages/AcademicsPage'))
const DaycarePage = lazy(() => import('@/pages/DaycarePage'))
const AdmissionsPage = lazy(() => import('@/pages/AdmissionsPage'))
const GalleryPage = lazy(() => import('@/pages/GalleryPage'))
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const FAQPage = lazy(() => import('@/pages/FAQPage'))
const ReviewsPage = lazy(() => import('@/pages/ReviewsPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// SEO Landing pages
const PlaySchoolPage = lazy(() => import('@/pages/landing/PlaySchoolPage'))
const DaycareKharadiPage = lazy(() => import('@/pages/landing/DaycareKharadiPage'))
const TuitionClassesPage = lazy(() => import('@/pages/landing/TuitionClassesPage'))
const CBSETuitionPage = lazy(() => import('@/pages/landing/CBSETuitionPage'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary-100 border-t-primary-900 rounded-full animate-spin" />
        <p className="text-sm text-gray-500 font-body">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content" className="pt-16">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/daycare" element={<DaycarePage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            {/* SEO Landing Pages */}
            <Route path="/play-school-kharadi" element={<PlaySchoolPage />} />
            <Route path="/day-care-center-kharadi" element={<DaycareKharadiPage />} />
            <Route path="/tuition-classes-kharadi" element={<TuitionClassesPage />} />
            <Route path="/cbse-tuition-kharadi" element={<CBSETuitionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  )
}
