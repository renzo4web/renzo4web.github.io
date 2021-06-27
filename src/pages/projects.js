import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

import { Link, graphql, useStaticQuery } from 'gatsby'

// Create React componenet
// A valid React componenet must return a ONLY React element
const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            id
            slug
            heroImg {
              fluid(maxWidth: 400 quality:80) {
                ...GatsbyContentfulFluid
              }
              description
            }
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
      <SEO title="Projects" description="My Projects" />
      <h1>Selected Projects</h1>
      <section className="grid grid-projects">
        {projects.map(({ node: project }) => {
          return (
            <div key={project.id} >
              <Link className="project" to={`/project/${project.slug}`}>
              {project.heroImg && <Img fluid={project.heroImg.fluid} />}
              <h3 className="accent">{project.title}</h3>
              </Link>
            </div>
          )
        })}
      </section>

      {/*END CONTENT*/}
    </Layout>
  )
}

export default ProjectsPage
