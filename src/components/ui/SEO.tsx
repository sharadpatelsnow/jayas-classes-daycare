import { Helmet } from 'react-helmet-async'
import { SEOMeta } from '@/utils/seo'

interface SEOProps extends SEOMeta {}

export default function SEO({ title, description, canonical, ogImage, keywords, noIndex }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage || 'https://jayasclasses.in/og-image.jpg'} />
      <meta property="og:site_name" content="Jaya's Classes and Day Care Center" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || 'https://jayasclasses.in/og-image.jpg'} />

      {/* Additional */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Kharadi, Pune" />
    </Helmet>
  )
}
