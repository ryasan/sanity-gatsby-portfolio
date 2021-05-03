import React from 'react';
import {graphql} from 'gatsby';

import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import BlogPost from '../components/blog-post';
import SEO from '../components/seo';
import Loader from '../components/loader';
import {isEmpty} from '../lib/type-check-utils';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityBlogPost(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      authors {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`;

const BlogPostTemplate = (props) => {
  const {data, errors} = props;

  if (!isEmpty(errors)) return <GraphQLErrorList errors={errors} />;
  if (isEmpty(data)) return <Loader />;

  const {post} = data;

  return (
    <Container>
      {!isEmpty(post) && <SEO title={post.title || 'Untitled'} />}
      {!isEmpty(post) && <BlogPost {...post} />}
    </Container>
  );
};

export default BlogPostTemplate;
