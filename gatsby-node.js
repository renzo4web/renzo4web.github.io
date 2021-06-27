const path = require(`path`)
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const result = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      path: `/project/${edge.node.slug}`,
      component: projectTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
