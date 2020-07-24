import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const PostsPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allWordpressPost (sort: { fields: [date] }) {
          edges {
            node {
              title
              slug
              date(formatString: "MMMM Do YYYY")
              excerpt
              content
            }
          }
        }
      }
    `);

    
    return (
        <div>
            <h1>Posts</h1>
            <ol>
                {data.allWordpressPost.edges.map((edge) => {
                    return (
                        <li >
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.date}</p>
                            <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}></div>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default PostsPage