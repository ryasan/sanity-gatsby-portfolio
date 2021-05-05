import React from 'react';
import {graphql} from 'gatsby';

import {responsiveTitle1} from '../components/typography.module.css';
import Container from '../components/container';
// import Categories from '../components/categories';
import SEO from '../components/seo';
import BlogPostPreviewGrid from '../components/blog-post-preview-grid';
import GraphQLErrorList from '../components/graphql-error-list';
import Loader from '../components/loader';
import {mapEdgesToNodes} from '../lib/helpers';
import {isEmpty} from '../lib/type-check-utils';

// categories: allSanityCategory {
//   edges {
//     node {
//       title
//     }
//   }
// }

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

  if (errors) return <GraphQLErrorList errors={errors} />;
  if (isEmpty(data)) return <Loader />;

  return (
    <>
      <SEO title='Blog' />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
        {/* <Categories categories={mapEdgesToNodes(data.categories)} /> */}
        <BlogPostPreviewGrid nodes={mapEdgesToNodes(data.blogPosts)} />
      </Container>
    </>
  );
};

export default BlogPage;
