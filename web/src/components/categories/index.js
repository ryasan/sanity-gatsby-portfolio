import React from 'react';
import {motion} from 'framer-motion';

import * as styles from './categories.module.css';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const CheckMark = () => (
  <motion.svg className={styles.checkMark} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <motion.path
      className={styles.checkMarkCheck}
      initial={{strokeDashoffset: 48}}
      animate={{strokeDashoffset: 0}}
      transition={{duration: 0.3, delay: 0.3}}
      d='M4.1 17.2l7.1 7.2 16.7-16.8'
    />
  </motion.svg>
);

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
          {isActive && <CheckMark />}
          <span>{title.toLowerCase()}</span>
        </li>
      );
    })}
  </ul>
);

Categories.defaultProps = {
  nodes: [],
};

export default withThemeInfo(Categories);
