interface IMeta {
  title?: string
  , description?: string
  , image?: string
}

const buildTitle = (title: string | undefined) =>
  title ?
    `${title} | site web de Tarik`
    : 'Site web de Tarik Amar'


export default function build (
  {
    domain
    , path
  } : { domain: string, path: string}
  , meta?: IMeta
) {
  const {
    title
    , description = 'Mes services numériques à votre disposition'
    , image = `${domain}/img/logo512.png`
  } = meta || {}

  const compoundTitle = buildTitle(title)

  return {
    title: compoundTitle
    , description
    , author: 'Tarik Amar'
    // twitter
    , 'twitter:card': 'summary' // summary, summary_large_image, app (download mobile app), player (play media)
    , 'twitter:site': '_tarik_amar_'
    , 'twitter:title': compoundTitle
    , 'twitter:description': description
    , 'twitter:image': image
    // oPen gRaph
    , 'og:type': 'article'
    , 'og:title': compoundTitle
    , 'og:description': description
    , 'og:locale': 'fr_FR'
    , 'og:url': `${domain}${path}`
    , 'og:image': image
  }
}
