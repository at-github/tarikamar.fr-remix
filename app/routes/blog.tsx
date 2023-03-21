import { useLoaderData } from '@remix-run/react'
import Blog from '~/features/blog'
import { get, postContact } from '~/utils/api'
import type { PostInterface } from '~/features/blog/Post'
import type { ActionArgs, MetaFunction } from '@remix-run/node'
import build from '~/utils/buildMeta'

import styles from '~/features/blog/Blog.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = fromLoader =>  {
  const {data} = fromLoader

  return build(
    {domain: data.metadata.domain, path: fromLoader.location.pathname},
    {
      title: 'Blog'
      , description: `Les articles, partages, réflexions
& les projets du citoyen engagé, consom’acteur & développeur web : Tarik Amar.`
    }
  )
}

export async function loader() {
  const posts = await get('/wp/v2/posts')
  const domain = process.env.REACT_APP_DOMAIN

  return {
    posts
    , metadata: { domain }
  }
}

export async function action({request}: ActionArgs) {
  return postContact(await request.formData())
}

export default function Index() {
  const { posts } = useLoaderData() as { posts: PostInterface[] }

  return (
    <Blog posts={ posts } />
  )
}
