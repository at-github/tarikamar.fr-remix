import { useLoaderData } from 'react-router'
import Services from '~/features/services'
import myFetch from '~/utils/myFetch'

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
