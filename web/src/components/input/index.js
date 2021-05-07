import React from 'react';

import * as styles from './input.module.css';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const Input = ({isDark, placeholder, onChange, value, className, icon}) => (
  <div className={cn(styles.root, isDark && styles.rootDarkMode, className)}>
    {icon}
    <input
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type='text'
    />
  </div>
);

export const Textarea = ({isDark, placeholder, onChange, value, rows}) => (
  <textarea
    className={cn(styles.textArea, isDark && styles.textAreaDarkMode)}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    rows={rows}
    type='text'
  />
);

export const TextAreaWithTheme = withThemeInfo(Textarea);

Input.defaultProps = {
  placeholder: 'Search...',
  onChange: () => {},
};

Textarea.defaultProps = {
  placeholder: 'Message...',
  onChange: () => {},
  rows: 5,
};

export default withThemeInfo(Input);
