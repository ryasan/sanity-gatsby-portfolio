import React from 'react';
import {graphql} from 'gatsby';

import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import Project from '../components/project';
import SEO from '../components/seo';
import Loader from '../components/loader';
import {isEmpty} from '../lib/type-check-utils';

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
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
      members {
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

const ProjectTemplate = (props) => {
  const {data, errors} = props;

  if (!isEmpty(errors)) return <GraphQLErrorList errors={errors} />;
  if (isEmpty(data)) return <Loader />;

  const {project} = data;

  return (
    <Container>
      {!isEmpty(project) && <SEO title={project.title || 'Untitled'} />}
      {!isEmpty(project) && <Project {...project} />}
    </Container>
  );
};

export default ProjectTemplate;
