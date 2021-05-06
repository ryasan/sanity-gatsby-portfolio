import React, {useState, useEffect} from 'react';
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
import {isEmpty, isEmptyArray, isEmptyString} from '../lib/type-check-utils';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategories, setActiveCategories] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  if (errors) return <GraphQLErrorList errors={errors} />;
  if (isEmpty(data)) return <Loader />;

  const handleClick = (title) => {
    setActiveCategories((list) => {
      if (list.includes(title)) return list.filter((t) => t !== title);
      else return [...list, title];
    });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const posts = mapEdgesToNodes(data.blogPosts);

  useEffect(() => {
    setBlogPosts(() => {
      return posts.filter(({categories}) => {
        return (
          isEmptyArray(activeCategories) ||
          categories.some(({title}) => activeCategories.includes(title))
        );
      });
    });
  }, [activeCategories]);

  useEffect(() => {
    setBlogPosts(() => {
      return posts.filter(({title, ...post}) => {
        const {text} = post._rawExcerpt[0].children[0];
        const regex = new RegExp(searchTerm, 'i');

        return isEmptyString(searchTerm) || regex.test(title) || regex.test(text);
      });
    });
  }, [searchTerm]);

  return (
    <>
      <SEO title='Blog' />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
        <Search onChange={handleChange} value={searchTerm} placeholder='Search posts...' />
        <Categories
          categories={mapEdgesToNodes(data.categories)}
          activeList={activeCategories}
          onClick={handleClick}
        />
        {isEmptyArray(blogPosts) && <h2 className={responsiveTitle2}>Empty 😭</h2>}
        <BlogPostPreviewGrid nodes={blogPosts} />
      </Container>
    </>
  );
};

export default BlogPage;
