import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { buildSEO } from '@/utils/seo'
import { BLOG_POSTS } from '@/data/blog'
import { BUSINESS, WHATSAPP_MESSAGES } from '@/data/constants'
import { trackWhatsAppLead } from '@/utils/analytics'

function renderContent(content: string) {
  // Convert markdown-like content to JSX
  const paragraphs = content.split('\n\n').filter(Boolean)
  return paragraphs.map((para, i) => {
    if (para.startsWith('**') && para.endsWith('**') && para.split('**').length === 3) {
      const text = para.slice(2, -2)
      return <h3 key={i} className="font-heading text-xl font-bold text-primary-900 mt-8 mb-3">{text}</h3>
    }
    // Handle inline bold
    const parts = para.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={i} className="font-body text-gray-700 leading-relaxed mb-4">
        {parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="font-semibold text-primary-900">{part.slice(2, -2)}</strong>
          }
          if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={j}>{part.slice(1, -1)}</em>
          }
          return part
        })}
      </p>
    )
  })
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3)

  const seo = buildSEO({
    title: `${post.title} | Jaya's Classes Kharadi`,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
    keywords: post.keywords.join(', '),
  })

  return (
    <>
      <SEO {...seo} />

      {/* Hero */}
      <section className="bg-dark-gradient py-16 text-white">
        <div className="container-main max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Link to="/blog" className="text-secondary-300 hover:text-white transition-colors font-body">Blog</Link>
              <span className="opacity-50">/</span>
              <span className="text-white/70 font-body">{post.category}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-white/70 font-body">
              <span>📅 {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>⏱️ {post.readTime} read</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full">{post.category}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt */}
          <div className="bg-secondary-50 border-l-4 border-secondary-500 pl-5 py-3 mb-8 rounded-r-xl">
            <p className="font-body text-secondary-800 italic leading-relaxed">{post.excerpt}</p>
          </div>

          {/* Article body */}
          <article className="prose-like mb-12">
            {renderContent(post.content)}
          </article>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mb-10">
            {post.keywords.map(k => (
              <span key={k} className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-body">
                #{k.replace(/\s+/g, '-')}
              </span>
            ))}
          </div>

          {/* CTA box */}
          <div className="bg-primary-gradient rounded-2xl p-8 text-white text-center mb-12">
            <div className="text-4xl mb-3">🏫</div>
            <h2 className="font-heading text-xl font-bold mb-2">
              Looking for quality education and daycare in Kharadi?
            </h2>
            <p className="font-body opacity-90 mb-6 text-sm">
              Jaya's Classes and Day Care Center — Near D'Mart Ready, Kharadi, Pune. Admissions Open!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/admissions" variant="accent">Enquire Now →</Button>
              <Button
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general)}`}
                target="_blank" rel="noopener noreferrer"
                variant="whatsapp"
                onClick={() => trackWhatsAppLead('blog_post_cta')}
              >
                💬 WhatsApp
              </Button>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div>
              <h2 className="font-heading text-xl font-bold text-primary-900 mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group bg-gray-50 rounded-xl p-4 hover:bg-primary-50 transition-colors"
                  >
                    <span className="text-xs text-secondary-600 font-body">{r.category}</span>
                    <p className="font-heading text-sm font-semibold text-primary-900 mt-1 group-hover:text-secondary-700 transition-colors line-clamp-2">
                      {r.title}
                    </p>
                    <span className="text-xs text-gray-400 font-body">{r.readTime} read</span>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link to="/blog" className="text-primary-900 font-semibold hover:underline font-body text-sm">
                  ← Back to All Articles
                </Link>
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
