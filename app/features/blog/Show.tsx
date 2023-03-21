import type { LoaderFunctionArgs } from 'react-router-dom';
import { Link } from 'react-router-dom'
import BackIcon from '~/components/Icons/BackIcon'
import {get} from '~/utils/api'
import BlogContainer from './BlogContainer'
import type {PostInterface} from './Post';
import Post from './Post'

export function getPost({params}: LoaderFunctionArgs) {
  return get(`/custom/v0/posts/${params.slug}`)
}

export default function ShowPost(props: {
  post: PostInterface
}) {
  const { post }         = props
  const { title }        = post
  const content          = post.content.rendered
  const featuredMediaUrl = post.featured_media_url

  return <BlogContainer contactSubject={`À propos de : ${title}`}>
    <Post
      title={title}
      content={content}
      featuredMediaUrl={featuredMediaUrl}
    >
      <Link
        className="back"
        to={'/blog/'}
      ><BackIcon /></Link>
    </Post>
  </BlogContainer>
}
