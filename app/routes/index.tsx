import { useLoaderData } from 'react-router'
import Services from '~/features/services'
import myFetch from '~/utils/myFetch'
import type { MetaFunction } from '@remix-run/node'
import build from '~/utils/buildMeta'

import styles from '~/features/services/Services.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = (data) =>
  build({
    title: data.data.title.rendered
  })

interface APIServicesResponse {
  content: {
    rendered: string
  }
}

export async function loader() {
  return myFetch('/wp/v2/pages/5')
}

export default function Index() {
  const page = useLoaderData() as APIServicesResponse

  return (
    <Services page={page.content.rendered}/>
  )
}
