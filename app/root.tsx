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
import styles from '~/global.css'
import stylesMenu from '~/components/Menu/Menu.css'
import stylesCTA from '~/components/CTA/CTA.css'

export function links() {
  return [
    { rel: 'stylesheet', href: styles }
    , { rel: 'stylesheet', href: stylesMenu }
    , { rel: 'stylesheet', href: stylesCTA }
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8'
  , title: 'Site web de Tarik Amar'
  , viewport: 'width=device-width,initial-scale=1'
})

export default function App() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div id="container">
          <Menu />
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
