import { useLoaderData } from 'react-router'
import Services from '~/features/services'
import myFetch from '~/utils/myFetch'
import type { MetaFunction } from '@remix-run/node'
import build from '~/utils/buildMeta'

import styles from '~/features/services/Services.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
// TODO once /services & / is same add this:
// <link rel="canonical" href="https://example.com/dresses/green-dresses" />
// https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=fr#rel-canonical-link-method

export const meta: MetaFunction = fromLoader =>  {
  const {data} = fromLoader

  return build(
    {domain: data.metadata.domain, path: fromLoader.location.pathname},
    { title: data.page.title.rendered }
  )
}

interface APIServicesResponse {
  content: {
    rendered: string
  }
}

export async function loader() {
  const page = await myFetch('/wp/v2/pages/5')
  const domain = process.env.REACT_APP_DOMAIN

  return {
    page
    , metadata: { domain }
  }
}

export default function Index() {
  const {page} = useLoaderData() as {page: APIServicesResponse}

  // TODO create utils to extract from wp api response
  return (
    <Services page={ page.content.rendered }/>
  )
}
