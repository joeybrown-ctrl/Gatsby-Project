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