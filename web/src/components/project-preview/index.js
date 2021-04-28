import {Link} from 'gatsby';
import React from 'react';

import * as styles from './project-preview.module.css';
import BlockText from '../block-text';
import {imageUrlFor} from '../../lib/image-url';
import {buildImageObj} from '../../lib/helpers';
import {withThemeInfo} from '../../context/theme-context';

function ProjectPreview(props) {
  return (
    <Link className={styles.root} to={`/projects/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  );
}

export default withThemeInfo(ProjectPreview);
