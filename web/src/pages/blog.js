import React from 'react';
import {graphql} from 'gatsby';

import {responsiveTitle1} from '../components/typography.module.css';
import Container from '../components/container';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import BlogPostPreviewGrid from '../components/blog-post-preview-grid';
import GraphQLErrorList from '../components/graphql-error-list';
import {mapEdgesToNodes} from '../lib/helpers';

export const query = graphql`
  query BlogPageQuery {
    blogPosts: allSanityBlogPost(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const BlogPage = (props) => {
  const {data, errors} = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.blogPosts && mapEdgesToNodes(data.blogPosts);

  return (
    <Layout>
      <SEO title='Blog' />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
    </Layout>
  );
};

export default BlogPage;
