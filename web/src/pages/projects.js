import React from 'react';
import {graphql} from 'gatsby';

import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import ProjectPreviewGrid from '../components/project-preview-grid';
import SEO from '../components/seo';
import Loader from '../components/loader';
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers';
import {responsiveTitle1} from '../components/typography.module.css';
import {isEmpty} from '../lib/type-check-utils';

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityProject(
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

const ProjectsPage = (props) => {
  const {data, errors} = props;

  if (errors) return <GraphQLErrorList errors={errors} />;
  if (isEmpty(data)) return <Loader />;

  return (
    <>
      <SEO title='Side Projects' />
      <Container>
        <h1 className={responsiveTitle1}>Side Projects</h1>
        <ProjectPreviewGrid
          nodes={mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;
