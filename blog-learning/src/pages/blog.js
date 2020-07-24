import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: { fields: publishedData, order: DESC }) {
            edges {
                node {
                title
                slug
                publishedData (formatString: "MMMM Do, YYYY")
                }
            }
            }
        }      
    `);

    let datas = data.allContentfulBlogPost.edges;
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {datas.map((edge) => {
                    return (
                        <li className={blogStyles.post} >
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedData}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage