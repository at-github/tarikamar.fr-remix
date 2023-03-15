export function buildTitle (title: string) {
  const baseTitle = 'Site web de Tarik Amar'

  if (!title)
    return baseTitle

  return `${title} | ${baseTitle}`
}

interface IMeta {
  title: string
  , description?: string
}

export default function build ({
  title
  , description = 'Mes services numériques à votre disposition'
}: IMeta) {
  return {
    title: buildTitle(title)
    , description
  }
}
