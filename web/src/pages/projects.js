import React from 'react';
import {graphql} from 'gatsby';

import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import ProjectPreviewGrid from '../components/project-preview-grid';
import SEO from '../components/seo';
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers';
import {responsiveTitle1} from '../components/typography.module.css';

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
  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }
  const projectNodes = data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs); // prettier-ignore
  return (
    <>
      <SEO title='Side Projects' />
      <Container>
        <h1 className={responsiveTitle1}>Side Projects</h1>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </>
  );
};

export default ProjectsPage;
