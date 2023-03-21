import BlogContainer from './BlogContainer'
import Posts from './Posts'
import type {PostInterface} from './Post'

export default function Blog(props: { posts: PostInterface[] }) {
  return <BlogContainer>
    <Posts posts={props.posts} />
  </BlogContainer>
}
