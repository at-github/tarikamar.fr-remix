export interface PostInterface {
  id: number
  , content: {
      rendered: string
    }
  , title: string
  , featured_media_url: string
  , excerpt_read_more: string
  , slug: string
}

export default function Post(props: {
    title: string
    , content: string
    , children: JSX.Element
}) {
  return (
    <article>
      <h2>{props.title}</h2>
      <div
        className="post"
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
      <footer>
        {props.children}
      </footer>
    </article>
  )
}
