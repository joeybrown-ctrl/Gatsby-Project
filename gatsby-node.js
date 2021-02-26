// This file configures node and gatsby and grants access to the node APIs that gatsby exposes.
// we'll use this to generate the slug and generate the blog posts.

// we'll use path.basename to remove everything from the path (including the extention, which is '.md') except the slug. Docs on this function can be found on the Node docs.
const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');

        //by logging as a JSON string, this makes the log easier to read in the console.
        // console.log(JSON.stringify(node, undefined, 4));

        // console.log('@@@@@@@@@@@@@@@', slug);
        // that log tested whether we were accessing the data and it worked.

        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
}

module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');

    // this graphql does not reference the graphql api on the front end. This graphql is a function and it's calling our query.

    const response = await graphql(`
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

    response.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    //1. get path to template
    //2. get markdown data
    //3. create new pages


}