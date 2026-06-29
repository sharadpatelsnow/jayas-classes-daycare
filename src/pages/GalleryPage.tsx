import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import Button from '@/components/ui/Button'
import { PAGE_SEO } from '@/utils/seo'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

const galleryFiles = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png,webp,gif,mp4}', {
  query: '?url',
  import: 'default',
  eager: true,
})

const galleryItems = Object.entries(galleryFiles)
  .map(([path, url]) => {
    const fileName = path.split('/').pop() || ''
    const extension = fileName.split('.').pop()?.toLowerCase() || ''
    const isVideo = extension === 'mp4'
    const caption = fileName
      .replace(/[-_]/g, ' ')
      .replace(/\.(jpg|jpeg|png|webp|gif|mp4)$/i, '')
      .replace(/\b(\w)/g, s => s.toUpperCase())

    return {
      src: url as string,
      alt: `Gallery ${isVideo ? 'video' : 'photo'} ${caption}`,
      caption,
      type: isVideo ? 'video' : 'image',
    }
  })
  .sort((a, b) => a.caption.localeCompare(b.caption))

export default function GalleryPage() {
  return (
    <>
      <SEO {...PAGE_SEO.gallery} />
      <section className="bg-white py-20">
        <div className="container-main mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-secondary-600 uppercase tracking-[0.3em]">Gallery</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary-900">A glimpse into the joyful, nurturing world of Jaya’s Classes</h1>
            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              Browse real photos and videos from our daycare, playgroup, classroom activities and happy children learning together in Kharadi, Pune.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.length > 0 ? (
              galleryItems.map((item, index) => (
                <motion.div key={item.src} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-soft hover:shadow-card transition-shadow">
                  {item.type === 'image' ? (
                    <img src={item.src} alt={item.alt} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="relative h-72 overflow-hidden bg-gray-100">
                      <video className="h-full w-full object-cover" controls>
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">Video</div>
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-base font-semibold text-gray-900">{item.caption}</p>
                    <p className="mt-2 text-sm text-gray-500">{item.alt}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-3">No gallery media found yet</p>
                <p className="text-sm text-gray-600 max-w-xl mx-auto">
                  Upload your photos and videos to the <code className="rounded bg-white px-2 py-1 text-xs">public/gallery</code> folder and they will appear here automatically.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  )
}

