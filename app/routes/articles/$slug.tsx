import type { ActionArgs, LoaderArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import type { PostInterface } from '~/features/blog/Post'
import ShowPost from '~/features/blog/Show'
import { get, postContact } from '~/utils/api'
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
      title: data.post.title
      , description: `Les articles, partages, réflexions
& les projets du citoyen engagé, consom’acteur & développeur web : Tarik Amar.`
    }
  )
}

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, 'params.slug is required')
  const post = await get(`/custom/v0/posts/${params.slug}`)
  invariant(post, `Post not found: ${params.slug}`)

  const domain = process.env.REACT_APP_DOMAIN

  return {
    post
    , metadata: { domain }
  }
}

export default function ArticleSlug() {
  const { post } = useLoaderData() as { post: PostInterface }

  return <ShowPost post={post} />
}
