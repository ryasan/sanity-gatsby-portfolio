import React from 'react';

import * as styles from './categories.module.css';
import withThemeInfo from '../header/index';
import {cn} from '../../lib/helpers';

const Categories = ({categories, isDark}) => {
  const handleClick = () => {
    //
  };

  return (
    <div className={styles.root}>
      <ul className={styles.categoryList}>
        {categories.map((category, i) => (
          <li className={styles.category} key={i} onClick={handleClick} tabIndex={0}>
            {category.title.toLowerCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

Categories.defaultProps = {
  nodes: [],
};

export default withThemeInfo(Categories);
