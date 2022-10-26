import React from 'react'
import Header from './header'
import './styles.css'
import styles from './styles.module.css'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Prisma</title>
      </head>
      <body>
        <div>
          <Header />
          <div className={styles.layout}>{children}</div>
        </div>
      </body>
    </html>
  )
}
