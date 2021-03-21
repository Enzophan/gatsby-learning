import React from 'react'
import Layout from '../Components/Layout'
import Img from 'gatsby-image'
import styles from '../Styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    <Img fluid={featuredImg.childImageSharp.fluid} />
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
            </div>

        </Layout>
    )
}


export const query = graphql`
    query ProjectDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            stack
            featuredImg {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
            }
        }
        }
    }
  
`