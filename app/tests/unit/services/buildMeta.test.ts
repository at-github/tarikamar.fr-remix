import build from '../../../utils/buildMeta'

test('Default meta data', () => {
  const meta = build(
    {
      domain: 'http://do.main'
      , path: '/'
    }
  )

  const title       = 'Site web de Tarik Amar'
  const description = 'Mes services numériques à votre disposition'
  const image       = 'http://do.main/img/logo512.png'

  expect(meta.title).toBe(title)
  expect(meta.description).toBe(description)

  // twitter
  expect(meta['twitter:card']).toBe('summary')
  expect(meta['twitter:site']).toBe('_tarik_amar_')
  expect(meta['twitter:title']).toBe(title)
  expect(meta['twitter:description']).toBe(description)
  expect(meta['twitter:image']).toBe(image)

  // open graph
  expect(meta['og:type']).toBe('article')
  expect(meta['og:title']).toBe(title)
  expect(meta['og:description']).toBe(description)
  expect(meta['og:locale']).toBe('fr_FR')
  expect(meta['og:url']).toBe('http://do.main/')
  expect(meta['og:image']).toBe(image)
})

test('Dynamic meta data', () => {
  const meta = build(
    {
      domain: 'http://do.main'
      , path: '/'
    }
    , {
      title: 'Custom title'
      , description: 'Another description'
      , image: 'https://domain.com/images/article.jpg'
    }
  )

  const title       = 'Custom title | site web de Tarik'
  const description = 'Another description'
  const image       = 'https://domain.com/images/article.jpg'

  expect(meta.title).toBe(title)
  expect(meta.description).toBe(description)

  // twitter
  expect(meta['twitter:card']).toBe('summary')
  expect(meta['twitter:site']).toBe('_tarik_amar_')
  expect(meta['twitter:title']).toBe(title)
  expect(meta['twitter:description']).toBe(description)
  expect(meta['twitter:image']).toBe(image)

  // open graph
  expect(meta['og:type']).toBe('article')
  expect(meta['og:title']).toBe(title)
  expect(meta['og:description']).toBe(description)
  expect(meta['og:locale']).toBe('fr_FR')
  expect(meta['og:url']).toBe('http://do.main/')
  expect(meta['og:image']).toBe(image)
})
