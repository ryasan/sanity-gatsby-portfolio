import React from 'react';

import * as styles from './social.module.css';
import Icon from '../icon';
import {isNullOrUndefined} from '../../lib/type-check-utils';

const SocialList = () => {
  const openLink = (link) => {
    if (!isNullOrUndefined(window)) {
      window.open(link);
    }
  };
  return (
    <ul className={styles.socialList} data-testid='social-list'>
      <li
        className={styles.socialItem}
        onClick={() => openLink('https://codepen.io/ryasan86')}
        tabIndex={0}>
        <Icon symbol='codepen' />
        <span>Codepen</span>
      </li>
      <li
        className={styles.socialItem}
        onClick={() => openLink('https://github.com/ryasan86')}
        tabIndex={0}>
        <Icon symbol='github' />
        <span>Github</span>
      </li>
      <li
        className={styles.socialItem}
        onClick={() => openLink('https://www.linkedin.com/in/ryasan86')}
        tabIndex={0}>
        <Icon symbol='linkedIn' />
        <span>LinkedIn</span>
      </li>
    </ul>
  );
};

export default SocialList;
