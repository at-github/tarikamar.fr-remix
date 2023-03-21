import BlogContainer from './BlogContainer'
import Posts from './Posts'
import type {PostInterface} from './Post'

export default function Blog(props: { posts: PostInterface[] }) {
  return <BlogContainer contactSubject="À propos du blog">
    <>
      <header>
        <h1>Blog</h1>
      </header>
      <Posts posts={props.posts} />
    </>
  </BlogContainer>
}
