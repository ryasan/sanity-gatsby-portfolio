import React, {useState} from 'react';
import {graphql} from 'gatsby';

import {responsiveTitle1, responsiveTitle2} from '../components/typography.module.css';
import SEO from '../components/seo';
import GraphQLErrorList from '../components/graphql-error-list';
import Container from '../components/container';
import Categories from '../components/categories';
import BlogPostPreviewGrid from '../components/blog-post-preview-grid';
import Search from '../components/input';
import Loader from '../components/loader';
import {mapEdgesToNodes} from '../lib/helpers';
import {isEmpty, isEmptyArray} from '../lib/type-check-utils';

export const query = graphql`
  query BlogPageQuery {
    categories: allSanityCategory {
      edges {
        node {
          title
        }
      }
    }
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
          categories {
            title
          }
        }
      }
    }
  }
`;

const BlogPage = (props) => {
  const {data, errors} = props;
  const [activeList, setActiveList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  if (errors) return <GraphQLErrorList errors={errors} />;
  if (isEmpty(data)) return <Loader />;

  const handleClick = (title) => {
    setActiveList((list) => {
      if (list.includes(title)) return list.filter((t) => t !== title);
      else return [...list, title];
    });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const posts = mapEdgesToNodes(data.blogPosts);

  const blogPosts = !isEmptyArray(activeList)
    ? posts.filter((post) => {
        return activeList.some((active) => {
          return post.categories.some(({title}) => title === active);
        });
      })
    : posts;

  return (
    <>
      <SEO title='Blog' />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
        <Search onChange={handleChange} value={searchTerm} placeholder='Search posts...' />
        <Categories
          categories={mapEdgesToNodes(data.categories)}
          activeList={activeList}
          onClick={handleClick}
        />
        {isEmptyArray(blogPosts) && <h2 className={responsiveTitle2}>Empty 😭</h2>}
        <BlogPostPreviewGrid nodes={blogPosts} />
      </Container>
    </>
  );
};

export default BlogPage;
