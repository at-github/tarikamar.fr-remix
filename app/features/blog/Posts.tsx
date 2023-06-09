import { Link } from 'react-router-dom'
import Post from './Post';
import type { PostInterface } from './Post';
import {get} from '~/utils/api'

export function getPosts() {
  return get('/wp/v2/posts')
}

export default function Posts(props: {posts: PostInterface[]}) {
  const {posts} = props

  return (
    <>
      {posts.map((post: PostInterface) => {
        return <Post
          title={post.title.rendered}
          content={post.excerpt_read_more}
          key={post.id}
        >
          <Link
            className="read-more"
            to={`/articles/${post.slug}`}
          >…</Link>
        </Post>
      })}
    </>
  )
}
