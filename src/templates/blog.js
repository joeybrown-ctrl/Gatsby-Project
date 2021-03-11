import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        body
      }
    }
  }
`


const Blog = (props) => {
    return (
        <Layout>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishDate}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.raw)}
        </Layout>
    )
}

export default Blog;