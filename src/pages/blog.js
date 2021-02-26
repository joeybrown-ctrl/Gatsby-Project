import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';

// 1. fetch the slug for post
// 2. use slug to generate a link to the post's page
// 3. test my work

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>

        </Layout>
    )
}

export default BlogPage;
