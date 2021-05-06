import React from 'react';

import * as styles from './search.module.css';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const Input = ({isDark, placeholder, onChange, value}) => (
  <input
    className={cn(styles.root, isDark && styles.rootDarkMode)}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    type='text'
  />
);

export const Textarea = ({isDark, placeholder, onChange, value, rows}) => (
  <textarea
    className={cn(styles.root, isDark && styles.rootDarkMode)}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    rows={rows}
    type='text'
  />
);

Input.defaultProps = {
  placeholder: 'Search...',
  onChange: () => {},
};

Textarea.defaultProps = {
  placeholder: 'Message...',
  onChange: () => {},
  rows: 3,
};

export default withThemeInfo(Input);
