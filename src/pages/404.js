import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404" description="upps nothing here" />

      <h1>Page Not Found</h1>
      <p>
        <Link to="/">HOME</Link>
      </p>
    </Layout>
  )
}

export default NotFound
