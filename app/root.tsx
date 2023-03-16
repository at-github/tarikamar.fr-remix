import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'
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

export default function App() {
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
          <Outlet />
          <Footer scrollTopVisible={!menuVisible}/>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
