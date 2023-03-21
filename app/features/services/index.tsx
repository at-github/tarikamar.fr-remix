import Contact from '~/components/Contact'

export default function Services(props: { page: string }) {
  return (
    <div className="content services">
      <div
        className="editorial"
        dangerouslySetInnerHTML={{
          __html: props.page
        }}
      />
      <div className="big-row contact">
        <div>
          <h1>Intéressé ?</h1>
          <Contact
            messagePlaceholder="Donnez moi une idée de l’aide dont vous avez besoin"
            subject="À propos de vos services"
          />
        </div>
      </div>
    </div>
  )
}
