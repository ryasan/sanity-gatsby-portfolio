import React, {useState} from 'react';
import {graphql} from 'gatsby';

import Container from '../components/container';
import Categories from '../components/categories';
import GraphQLErrorList from '../components/graphql-error-list';
import ProjectPreviewGrid from '../components/project-preview-grid';
import SEO from '../components/seo';
import Loader from '../components/loader';
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers';
import {responsiveTitle1, responsiveTitle2} from '../components/typography.module.css';
import {isEmpty, isEmptyArray} from '../lib/type-check-utils';

export const query = graphql`
  query ProjectsPageQuery {
    categories: allSanityCategory {
      edges {
        node {
          title
        }
      }
    }
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
          categories {
            title
          }
        }
      }
    }
  }
`;

const ProjectsPage = (props) => {
  const {data, errors} = props;
  const [activeList, setActiveList] = useState([]);

  if (errors) return <GraphQLErrorList errors={errors} />;
  if (isEmpty(data)) return <Loader />;

  const handleClick = (title) => {
    setActiveList((list) => {
      if (list.includes(title)) return list.filter((t) => t !== title);
      else return [...list, title];
    });
  };

  const projects = mapEdgesToNodes(data.projects);

  const projectList = !isEmptyArray(activeList)
    ? projects.filter((project) => {
        return activeList.some((active) => {
          return project.categories.some(({title}) => title === active);
        });
      })
    : projects;

  return (
    <>
      <SEO title='Side Projects' />
      <Container>
        <h1 className={responsiveTitle1}>Side Projects</h1>
        <Categories
          categories={mapEdgesToNodes(data.categories)}
          activeList={activeList}
          onClick={handleClick}
        />
        {isEmptyArray(projectList) && <h2 className={responsiveTitle2}>Empty 😭</h2>}
        <ProjectPreviewGrid nodes={projectList.filter(filterOutDocsWithoutSlugs)} />
      </Container>
    </>
  );
};

export default ProjectsPage;
