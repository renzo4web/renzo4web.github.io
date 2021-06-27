import React from 'react'

import { Link } from 'gatsby'

const Grid = ({ list, withImg }) => {
  return (
    <div className="project-grid">
      {list.map(({ node }) => {
        if (!node) {
          throw new Error('Node invalid check component')
        }

        return (
          <div
            data-wenk={node.technologiesUsed.split(',').join(' • ')}
            key={node.id}
            className="project"
          >
            <h4>{node.title}</h4>
            <p>{node.description}</p>
            <Link to={`/project/${node.slug}`}>Read more &rarr;</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Grid
