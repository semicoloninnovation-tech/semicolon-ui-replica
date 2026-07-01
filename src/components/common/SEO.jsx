import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Semicolon Innovations'
const SITE_URL = 'https://semicoloninnovations.com'
const DEFAULT_IMAGE = '/og-image.png'

function SEO({
  title,
  description,
  keywords,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – IT Solutions & Training Center Kerala`
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />
    </Helmet>
  )
}

export default SEO
