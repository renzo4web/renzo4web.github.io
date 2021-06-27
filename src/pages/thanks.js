import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { content } from './thanks.module.scss'

const Thanks = () => {
  return (
    <Layout>
      <SEO title="Thanks" description="Es de bien nacidos ser agradecido" />
      <div className={content}>
        <h1>This website wouldn’t be possible without the following projects and technologies.</h1>
        <p>
          <a href="https://www.gatsbyjs.com/">Gatsby</a> static dynamic site generator
        </p>
        <p>
          <a href="https://tiaanduplessis.github.io/wenk/">Wenk 😉</a> is a Lightweight tooltip
          available in pure CSS
        </p>

        <h2>Thank you for spreading free knowledge</h2>
        <p>
          <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
        </p>
        <p>
          <a href="https://nodeschool.io/">NODESCHOOL</a> open source workshops
        </p>
        <p>
          <a href="https://www.youtube.com/user/KepowOb">Kevin Powell</a> CSS Evangelist
        </p>
        <p>
          <a href="https://twitter.com/drchuck">Charles Severance</a> thanks to this man I wrote my
          first line of code, creator of the best course on programming.{' '}
          <a href="https://www.py4e.com/">Python for Everybody</a>
        </p>
        <p>
          <a href="https://javascript30.com/">Wes Bos</a> Javascript Master
        </p>  
        <p>Copywrong MMLXXV Rights, All Renzo Reserved</p>
      </div>
    </Layout>
  )
}

export default Thanks
