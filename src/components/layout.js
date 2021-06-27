import React from 'react'

import Footer from './footer'
import Header from './header'
import Head from './head'
import '../styles/index.scss'
import { container, content } from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <link rel="stylesheet" href="https://unpkg.com/wenk/dist/wenk.css"></link>
      <Header activePage={pageTitle} />
      <main className={content}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
