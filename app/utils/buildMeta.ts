interface IMeta {
  title?: string
  , description?: string
  , image?: string
}

export default function build (
  {
    domain
    , path
  } : { domain: string, path: string}
  , meta?: IMeta
) {
  const {
    title = 'Site web de Tarik Amar'
    , description = 'Mes services numériques à votre disposition'
    , image = `${domain}/img/logo512.png`
  } = meta || {}

  return {
    title
    , description
    , author: 'Tarik Amar'
    // twitter
    , 'twitter:card': 'summary' // summary, summary_large_image, app (download mobile app), player (play media)
    , 'twitter:site': '_tarik_amar_'
    , 'twitter:title': title
    , 'twitter:description': description
    , 'twitter:image': image
    // oPen gRaph
    , 'og:type': 'article'
    , 'og:title': title
    , 'og:description': description
    , 'og:locale': 'fr_FR'
    , 'og:url': `${domain}${path}`
    , 'og:image': image
  }
}
