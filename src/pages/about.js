import React from 'react'
import AboutMe from '../components/AboutMe'
import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => {
  return (
    <Layout>
      <SEO title="About" description="@renzo4web Froentend Developer" />
      <AboutMe />
    </Layout>
  )
}

export default About
