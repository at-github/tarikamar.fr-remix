import { useLoaderData } from 'react-router'
import Services from '~/features/services'
import type { ActionArgs, MetaFunction } from '@remix-run/node'
import build from '~/utils/buildMeta'
import { get, postContact } from '~/utils/api'

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
    { domain: data.metadata.domain, path: fromLoader.location.pathname },
    { title: data.page.title.rendered }
  )
}

interface APIServicesResponse {
  content: {
    rendered: string
  }
}

export async function loader() {
  const page = await get('/wp/v2/pages/404')
  const domain = process.env.REACT_APP_DOMAIN

  return {
    page
    , metadata: { domain }
  }
}

export async function action({request}: ActionArgs) {
  return postContact(await request.formData())
}

export default function Index() {
  const {page} = useLoaderData() as {page: APIServicesResponse}

  return (<Services page={ page }/>)
}
