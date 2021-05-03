import React from 'react';
import {graphql} from 'gatsby';

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from '../lib/helpers';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import ProjectPreviewGrid from '../components/project-preview-grid';
import SEO from '../components/seo';
import HeroBanner from '../components/hero-banner';
import BlogPostPreviewGrid from '../components/blog-post-preview-grid';
import Loader from '../components/loader';
import {isEmpty} from '../lib/type-check-utils';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }

    projects: allSanityProject(
      limit: 3
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
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
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    posts: allSanityBlogPost(limit: 3, sort: {fields: [publishedAt], order: DESC}) {
      edges {
        node {
          id
          publishedAt
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
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const {data, errors} = props;

  if (!isEmpty(errors)) return <GraphQLErrorList errors={errors} />;
  if (isEmpty(data)) return <Loader />;

  const {site} = data;
  if (isEmpty(site)) throw new Error('Missing "Site settings".');

  const projectNodes = data.projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  const blogPostNodes = data.posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <HeroBanner />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        <BlogPostPreviewGrid
          title='Latest blog posts'
          nodes={blogPostNodes}
          browseMoreHref='/blog/'
        />
        <ProjectPreviewGrid
          title='Latest projects'
          nodes={projectNodes}
          browseMoreHref='/projects/'
        />
      </Container>
    </>
  );
};

export default IndexPage;
