function buildTitle (title: string) {
  const baseTitle = 'Site web de Tarik Amar'

  if (!title)
    return baseTitle

  return `${title} | ${baseTitle}`
}

interface IMeta {
  title: string
  , description?: string
}

export default function build (
  {
    domain
    , path
  } : { domain: string, path: string}
  , {
    title
    , description = 'Mes services numériques à votre disposition'
  }: IMeta) {
  const buildedTitle = buildTitle(title)
  const logoUrl = `${domain}/img/logo512.png`

  return {
    title: buildedTitle
    , description
    , author: 'Tarik Amar'
    // twitter
    , 'twitter:card': 'summary' // summary, summary_large_image, app (download mobile app), player (play media)
    , 'twitter:site': '_tarik_amar_'
    , 'twitter:title': buildedTitle
    , 'twitter:description': description
    , 'twitter:image': logoUrl
    // oPen gRaph
    , 'og:type': 'article'
    , 'og:title': buildedTitle
    , 'og:description': description
    , 'og:locale': 'fr_FR'
    , 'og:url': `${domain}${path}`
    , 'og:image': logoUrl
  }
}
