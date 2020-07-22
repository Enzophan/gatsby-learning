const path = require('path');


module.exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');


        // console.log("node ", JSON.stringify(node, undefined, 4));
        // console.log('@@@@@@@@@@@@@@@@@@@ ', slug);
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`./src/templates/blog.js`)

    const res = await graphql(`
    query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
  `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            // Path for this page — required
            // https://www.gatsbyjs.org/docs/node-apis/#createPages
            path: `/blog/${edge.node.fields.slug}`,
            component: blogTemplate,
            context: {
                slug: edge.node.fields.slug
            },
        })
    })

}