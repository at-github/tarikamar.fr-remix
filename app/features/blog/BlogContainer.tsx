import Contact from '../../components/Contact'

export default function BlogContainer(props: {
  children: JSX.Element
  , contactSubject: string
}) {
  return (
    <div className="content blog">
      {props.children}
      <div className="big-row contact">
        <div>
          <h3>Un truc à ajouter ?</h3>
          <p>
            Vous souhaitez un complément d'information sur un article ?<br/>
            Ou vous aimeriez voir un sujet particulier traité ici ?
          </p>
          <h1>Contactez moi</h1>
          <Contact subject="À propos du blog" />
        </div>
      </div>
    </div>
  )
}
