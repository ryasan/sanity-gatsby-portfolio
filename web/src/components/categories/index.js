import React from 'react';

import * as styles from './categories.module.css';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const Categories = ({onClick, activeList, categories, isDark}) => (
  <ul className={styles.root}>
    {categories.map(({title}, i) => {
      const isActive = activeList.includes(title);
      return (
        <li
          className={cn(
            styles.category,
            isDark && styles.categoryDark,
            isActive && styles.active,
            isDark && isActive && styles.activeDark,
          )}
          key={i}
          onClick={() => onClick(title)}
          title={title}
          tabIndex={0}>
          {title.toLowerCase()}
        </li>
      );
    })}
  </ul>
);

Categories.defaultProps = {
  nodes: [],
};

export default withThemeInfo(Categories);
