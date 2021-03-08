import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

// 1. Swap out the markdown query with the contentful query
// 2. Update the component to render the new data -- don't worry if the link goes to a non-existent page
// 3. test my work

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
                sort: {
                fields:publishDate,
                order:DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>

        </Layout>
    )
}

export default BlogPage;
