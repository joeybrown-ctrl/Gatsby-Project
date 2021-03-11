// This file configures node and gatsby and grants access to the node APIs that gatsby exposes.
// we'll use this to generate the slug and generate the blog posts.

// we'll use path.basename to remove everything from the path (including the extention, which is '.md') except the slug. Docs on this function can be found on the Node docs.
const path = require('path');

// this graphql does not reference the graphql api on the front end. This graphql is a function and it's calling our query.

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const response = await graphql(`
            query {
                allContentfulBlogPost {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `)

    response.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}