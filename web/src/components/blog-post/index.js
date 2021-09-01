import React from 'react';
import {format, distanceInWords, differenceInDays} from 'date-fns';

import * as styles from './blog-post.module.css';
import {buildImageObj} from '../../lib/helpers';
import {imageUrlFor} from '../../lib/image-url';
import BlockContent from '../block-content';
import RoleList from '../role-list';

function BlogPost(props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props;
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <div className={styles.grid}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>{title}</h1>
          {_rawBody && <BlockContent blocks={_rawBody} />}
        </div>
        <aside className={styles.metaContent}>
          {publishedAt && (
            <div className={styles.publishedAt}>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do YYYY')}
            </div>
          )}
          {authors && <RoleList items={authors} title='Authors' />}
          {categories && (
            <div className={styles.categories}>
              <h3 className={styles.categoriesHeadline}>Categories</h3>
              <ul>
                {categories.map((category) => (
                  <li key={category._id}>{category.title}</li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.buyMeACoffeeContainer}>
            <a href='https://buymeacoffee.com/ryansantos'>
              <strong>Buy Me a Coffee</strong>
            </a>
          </div>
        </aside>
      </div>
    </article>
  );
}

export default BlogPost;
