import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'


const Contact = () => {
  return (
    <Layout >
      {/*START CONTENT*/}
      <SEO title="Contact" description='Contact me page' />


      <section className="contact-page">
      <span className='hire-span'>Available for hire</span>
      <ul>
        <li>
          <a
            title="GitHub Profile"
            tabIndex="1"
            target="_blank"
            href="https://github.com/renzo4web"
          >
            Github
          </a>
        </li>
        <li>
          <a
            tabIndex="2"
            title="Twitter Profile"
            target="_blank"
            href="https://twitter.com/renzo4web"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            title="Linkedin Profile"
            tabIndex="3"
            target="_blank"
            href="https://www.linkedin.com/in/renzobarrios/"
          >
           Linkedin
          </a>
        </li>
        <li>
          <a title="My Email" tabIndex="4" target="_blank" href="mailto:renzobarrios@aol.com">
          renzobarrios@aol.com
          </a>
        </li>
      </ul>
    </section>
      {/*END CONTENT*/}
    </Layout>
  )
}

export default Contact
