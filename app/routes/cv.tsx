import { useLoaderData } from '@remix-run/react'
import CV from '~/features/cv'
import { get, postContact } from '~/utils/api'
import type { ActionArgs, MetaFunction } from '@remix-run/node'
import build from '~/utils/buildMeta';
import type { ExperienceAPIInterface } from '~/features/cv/Experience'
import type { FormationAPIInterface } from '~/features/cv/Formation'

import stylesCV from '~/features/cv/CV.css'
import stylesAccordion from '~/components/Accordion/Accordion.css'

export function links() {
  return [
    { rel: 'stylesheet', href: stylesCV }
    , { rel: 'stylesheet', href: stylesAccordion }
  ]
}

export const meta: MetaFunction = fromLoader =>  {
  const {data} = fromLoader

  return build(
    { domain: data.metadata.domain, path: fromLoader.location.pathname },
    {
      title: 'CV'
      , description: 'Expériences et formations, bref le CV complet de Tarik Amar'
    }
  )
}

interface APIServicesResponse {
  experiences: ExperienceAPIInterface[]
  , formations: FormationAPIInterface[]
}

function getExperiences() {
  return get('/xp/experience?per_page=20') // By default it's return 10 items
}

function getFormations() {
  return get('/edu/formation')
}

export async function getCV() {
  return {
    experiences: await getExperiences()
    , formations: await getFormations()
  }
}

export async function loader() {
  const domain = process.env.REACT_APP_DOMAIN
  const cv = await getCV()

  return {
    cv
    , metadata: { domain }
  }
}

export async function action({request}: ActionArgs) {
  return postContact(await request.formData())
}

export default function Index() {
  const { cv } = useLoaderData() as {cv: APIServicesResponse}

  return <CV
    experiences={ cv.experiences }
    formations={ cv.formations }
  />
}
