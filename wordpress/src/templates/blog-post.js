import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
    query {
        allWordpressPost {
            edges {
                node {
                    title
                    excerpt
                    slug
                    content
                    date(formatString: "MMMM Do YYYY")
                }
            }
        }
    }
`

const PostPage = ({ data }) => {
    console.log("data ", data);
    const post = data.allWordpressPost.edges[0].node;
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <p> On: {post.date} </p>
        </div>
    )
}


export default PostPage