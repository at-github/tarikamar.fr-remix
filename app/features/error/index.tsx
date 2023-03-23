export default function Error(props: {
  status: number
  , message?: string
}) {
  return <>
    <h1>Oups</h1>
    { props.status === 404 ?
      <>
        <p className="text-center">
          <img
            alt="Not found page animation"
            width="800px"
            height="347px"
            src="/img/404.gif"
            style={{maxWidth: '800px', width: '100%', height: 'auto'}}
          />
        </p>
        <h3 className="text-center">
          { props.message ?? "Désolé, cette page n'est pas disponible" }
        </h3>
      </>
      :
      <>
        <p className="text-center">
          <img
            alt="My cat controlling the computer"
            width="320px"
            height="270px"
            src="/img/cat-power-code.gif"
            style={{maxWidth: '320px', width: '100%'}}
          />
        </p>
        <h3 className="text-center">
          Désolé, une pétouille est survenue
        </h3>
        <p className="text-center">
          <small>
            C'est certainement mon chat a pris le contrôle de l'ordi
          </small>
        </p>
      </>
    }
  </>
}
