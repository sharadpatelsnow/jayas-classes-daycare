import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Section from "@/components/ui/Section"
import { PAGE_SEO } from '@/utils/seo'
import { BLOG_POSTS } from '@/data/blog'

const CATEGORIES = ['All', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))]
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter(p => {
      const matchCat = category === 'All' || p.category === category
      const q = search.toLowerCase()
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.keywords.some(k => k.includes(q))
      return matchCat && matchSearch
    })
  }, [search, category])

  return (
    <>
      <SEO {...PAGE_SEO.blog} />

      {/* Hero */}
      <section className="bg-dark-gradient py-20 text-white text-center">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-5xl mb-4">📝</div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-3">
              Our Blog
            </h1>
            <p className="font-body text-lg opacity-90 max-w-2xl mx-auto">
              Expert insights on child development, education, daycare, and parenting from Jaya's Classes, Kharadi
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="light">
        {/* Search & Filter */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="search"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary-400 bg-white"
          >
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <p className="text-sm text-gray-500 font-body text-center mb-8">
          Showing {filtered.length} of {BLOG_POSTS.length} articles
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <p className="font-body text-gray-500">No articles found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.4) }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Colour band */}
                <div className="h-2 bg-primary-gradient" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold bg-secondary-100 text-secondary-700 px-2.5 py-1 rounded-full font-body">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 font-body">{post.readTime} read</span>
                  </div>
                  <h2 className="font-heading text-base font-bold text-primary-900 leading-snug mb-3 flex-1">
                    {post.title}
                  </h2>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-400 font-body">
                      {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-primary-900 hover:text-secondary-600 transition-colors font-body"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
