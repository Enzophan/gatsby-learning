import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../Components/Layout'
import styles from '../Styles/home.module.css'
import Img from 'gatsby-image'

// https://www.youtube.com/playlist?list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB

export default function Home({data}) {
  console.log('data ', data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Da Nang</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} /> */}
        <Img fluid={data.file.childImageSharp.fluid}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`