import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'
import Error from '~/features/error'
import {useRef} from 'react'
import useIntersectionObserver from '~/hooks/useIntersectionObserver'

import styles from '~/global.css'
import stylesMenu from '~/components/Menu/Menu.css'
import stylesCTA from '~/components/CTA/CTA.css'
import stylesFooter from '~/components/Footer/Footer.css'
import stylesContact from '~/components/Contact/Contact.css'

export function links() {
  return [
    { rel: 'stylesheet', href: styles }
    , { rel: 'stylesheet', href: stylesMenu }
    , { rel: 'stylesheet', href: stylesCTA }
    , { rel: 'stylesheet', href: stylesFooter }
    , { rel: 'stylesheet', href: stylesContact }
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8'
  , title: 'Site web de Tarik Amar'
  , viewport: 'width=device-width,initial-scale=1'
})

function Document(props: {
  children: JSX.Element
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  let menuVisible = true

  if (typeof entry?.isIntersecting !== 'undefined')
    menuVisible = entry.isIntersecting

  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div id="container">
          <Menu ref={ref}/>
          {props.children}
          <Footer scrollTopVisible={!menuVisible}/>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  return <Document>
    <Outlet />
  </Document>
}

export function CatchBoundary() {
  const caught = useCatch()

  // eslint-disable-next-line no-console
  console.warn(caught)

  return <Document>
    <Error status={caught.status} />
  </Document>
}
