import React, {useState} from 'react';
import {format, distanceInWords, differenceInDays} from 'date-fns';

import * as styles from './blog-post.module.css';
import {buildImageObj, cn} from '../../lib/helpers';
import {imageUrlFor} from '../../lib/image-url';
import BlockContent from '../block-content';
import Container from '../container';
import RoleList from '../role-list';
import Loader from '../loader';

function BlogPost(props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <article className={styles.root}>
        {isLoading && (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        )}
        {mainImage && mainImage.asset && (
          <div className={cn(styles.mainImage, !isLoading && styles.visible)}>
            <img
              onLoad={() => setIsLoading(false)}
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )}
        <Container>
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
            </aside>
          </div>
        </Container>
      </article>
    </Container>
  );
}

export default BlogPost;
