const path = require(`path`)

// module.exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions
//     return graphql(`
//     {
//       allWordpressPost(sort: {fields: [date]}) {
//         edges {
//           node {
//             title
//             excerpt
//             slug
//             date(formatString: "MM-DD-YYYY")
//             author {
//               name
//             }
//           }
//         }
//       }
//     }

//   `).then(result => {
//         result.data.allWordpressPost.edges.forEach(({ node }) => {
//             createPage({
//                 // Decide URL structure
//                 path: node.slug,
//                 // path to template
//                 component: path.resolve(`./src/templates/blog-post.js`),
//                 context: {
//                     // This is the $slug variable
//                     // passed to blog-post.js
//                     slug: node.slug,
//                 },
//             })
//         })
//     })
// }



module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`./src/templates/blog-post.js`)

    const res = await graphql(`
      query {
        allWordpressPost {
            edges {
              node {
                slug
              }
            }
          }
        }
  `);

    res.data.allWordpressPost.edges.forEach((edge) => {
        console.log("AAA ", edge.node.slug);
        createPage({
            path: `/posts/${edge.node.slug}`,
            component: blogTemplate,
            context: {
                slug: edge.node.slug
            },
        })
    })

}