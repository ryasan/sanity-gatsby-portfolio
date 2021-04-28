import React, {useState} from 'react';
import {Link} from 'gatsby';
import {format, distanceInWords, differenceInDays} from 'date-fns';

import * as styles from './project.module.css';
import {buildImageObj, cn} from '../../lib/helpers';
import {imageUrlFor} from '../../lib/image-url';
import BlockContent from '../block-content';
import Container from '../container';
import RoleList from '../role-list';
import Loader from '../loader';

function Project(props) {
  const {_rawBody, title, categories, mainImage, members, publishedAt, relatedProjects} = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <article className={styles.root}>
        {isLoading && (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        )}
        {props.mainImage && mainImage.asset && (
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
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title='Project members' />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map((project) => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>
    </Container>
  );
}

export default Project;
