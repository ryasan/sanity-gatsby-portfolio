import React, {useEffect, useReducer, useMemo, useState} from 'react';
import {graphql} from 'gatsby';
import {motion} from 'framer-motion';

import * as styles from '../styles/modules/post.module.css';
import {responsiveTitle1, responsiveTitle2} from '../components/typography.module.css';
import SEO from '../components/seo';
import GraphQLErrorList from '../components/graphql-error-list';
import Container from '../components/container';
import Categories from '../components/categories';
import BlogPostPreviewGrid from '../components/blog-post-preview-grid';
import Search from '../components/input';
import Icon from '../components/icon';
import Loader from '../components/loader';
import {mapEdgesToNodes} from '../lib/helpers';
import {isEmpty, isEmptyArray, isEmptyString} from '../lib/type-check-utils';
import {withThemeInfo} from '../context/theme-context';

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

const ACTIVE_CATEGORIES = 'ACTIVE_CATEGORIES';
const BLOG_POSTS = 'BLOG_POSTS';
const SEARCH = 'SEARCH';

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {...state, activeCategories: [], searchTerm: action.payload};
    case ACTIVE_CATEGORIES:
      return {...state, activeCategories: action.payload, searchTerm: ''};
    case BLOG_POSTS:
      return {...state, blogPosts: action.payload};
    default:
      return state;
  }
};

const BlogPage = (props) => {
  const {data, errors} = props;
  const [state, dispatch] = useReducer(reducer, {
    blogPosts: [],
    activeCategories: [],
    searchTerm: '',
  });
  const [focusOnInput, setFocusOnInput] = useState(false);

  if (errors) return <GraphQLErrorList errors={errors} />;
  if (isEmpty(data)) return <Loader />;

  const handleClick = (title, list) => {
    dispatch({
      type: ACTIVE_CATEGORIES,
      payload: list.includes(title) ? list.filter((t) => t !== title) : [...list, title],
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: SEARCH,
      payload: e.target.value,
    });
  };

  const handleFocus = () => {
    setFocusOnInput(true);
  };

  const handleBlur = () => {
    setFocusOnInput(false);
  };

  const posts = useMemo(() => mapEdgesToNodes(data.blogPosts), [mapEdgesToNodes, data]);

  useEffect(() => {
    dispatch({
      type: BLOG_POSTS,
      payload: posts.filter(({categories}) => {
        return (
          isEmptyArray(state.activeCategories) ||
          categories.some(({title}) => state.activeCategories.includes(title))
        );
      }),
    });
  }, [state.activeCategories]);

  useEffect(() => {
    dispatch({
      type: BLOG_POSTS,
      payload: posts.filter(({title, ...post}) => {
        const {text} = post._rawExcerpt[0].children[0];
        const regex = new RegExp(state.searchTerm, 'i');

        return isEmptyString(state.searchTerm) || regex.test(title) || regex.test(text);
      }),
    });
  }, [state.searchTerm]);

  return (
    <>
      <SEO title='Blog' />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
        <motion.div
          className={styles.searchContainer}
          animate={{width: focusOnInput ? '100%' : 'auto'}}
          transition={{duration: 0.5}}>
          <Icon symbol='search' className={styles.icon} />
          <Search
            className={styles.search}
            value={state.searchTerm}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder='Search posts...'
          />
        </motion.div>
        <Categories
          categories={mapEdgesToNodes(data.categories)}
          activeList={state.activeCategories}
          onClick={handleClick}
        />
        {isEmptyArray(state.blogPosts) && <h2 className={responsiveTitle2}>Empty 😭</h2>}
        <BlogPostPreviewGrid nodes={state.blogPosts} />
      </Container>
    </>
  );
};

export default withThemeInfo(BlogPage);
