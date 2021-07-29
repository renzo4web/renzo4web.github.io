import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { FaSass } from '@react-icons/all-files/fa/FaSass'
import { SiWebpack } from '@react-icons/all-files/si/SiWebpack'
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby'
import { SiStyledComponents } from '@react-icons/all-files/si/SiStyledComponents'
import { SiNodeDotJs } from '@react-icons/all-files/si/SiNodeDotJs'

import Layout from '../components/layout'
import Contact from '../components/contact'
import SEO from '../components/seo'
import Grid from '../components/grid'

// Create React componenet

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(filter: { tags: { eq: "selected" } }) {
        edges {
          node {
            id
            slug
            title
            description
            technologiesUsed
          }
        }
      }
    }
  `)
  const {
    allContentfulProject: { edges: projects },
  } = data

  return (
    <Layout>
      {/*START CONTENT*/}
      <SEO title="Home" description="@renzo4web Froentend Developer" />
      <div className="welcome">
        <h1 className="heading-title">
          Hi, I'm Renzo <span className="heading-emoji">👋</span>
        </h1>
        <p>
          <span className="flash" data-wenk="At the moment junior 👶">
            Frontend Developer
          </span>{' '}
          powered by coffee ☕ living in <span data-wenk="Mendoza">Argentina🌎.</span>
        </p>
        <p>
          With a background in product design, in other words I went to art college but ended up as
          a programmer. Currently exploring new opportunities and side projects.
        </p>
        <p>
          Right now I'm focusing on learning more about{' '}
          <span data-wenk="The king of the web" className="javascript-txt">
            JavaScript
          </span>
          <span data-wenk="Is it just a trend?" className="react-txt">
            React
          </span>
          . Hoping one day evolve into the mythical
          <span data-wenk="if there is such a thing">✨full-stack developer✨.</span>
        </p>
        <p
          data-wenk-pos="bottom"
          data-wenk="Technologies I like to work with"
          className="technologies"
        >
          <span data-wenk="Webpack">
            <SiWebpack />
          </span>
          <span data-wenk="Gatsby">
            <SiGatsby />
          </span>
          <span data-wenk="React">
            <FaReact />
          </span>
          <span data-wenk="Node Js">
            <SiNodeDotJs />
          </span>
          <span data-wenk="Styled Components">
            <SiStyledComponents />
          </span>
          <span data-wenk="Sass">
            <FaSass />
          </span>
        </p>
        <hr />
      </div>
      <h2>Projects</h2>

      <Grid list={projects} />

      <h4 className="projects-link btn-cta">
        <Link to="/projects">More Projects take a look &rarr;</Link>
      </h4>

      <Contact />

      <div className="container marquee">
        <div>
          That's all Folks!
          😁🤓👽🤖🤩👀👁🦴👍👏🥶🎬🎧🎨🎮🎸💾💽💻📸📀😁🤓👽🤖🤩👀👁🦴👍👏🥶🎬🎧🎨🎮🎸💾💽💻📸📀😁🤓👽🤖🤩👀👁🦴👍👏🥶🎬🎧🎨🎮🎸💾💽💻📸📀😁🤓👽🤖🤩👀👁🦴👍👏🥶🎬🎧🎨🎮🎸💾💽💻📸📀
          That's all Folks!
        </div>{' '}
      </div>

      {/*END CONTENT*/}
    </Layout>
  )
}

export default HomePage
