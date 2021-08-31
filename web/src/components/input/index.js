import React from 'react';

import * as styles from './input.module.css';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const Input = ({isDark, placeholder, onChange, value, onFocus, onBlur, className, ...props}) => (
  <input
    className={cn(styles.root, isDark && styles.rootDarkMode, className)}
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    value={value}
    {...props}
  />
);

export const Textarea = ({
  isDark,
  placeholder,
  onChange,
  value,
  rows,
  onFocus,
  onBlur,
  className,
  ...props
}) => (
  <textarea
    className={cn(styles.root, isDark && styles.rootDarkMode, className)}
    placeholder={placeholder}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    value={value}
    rows={rows}
    {...props}
  />
);

export const TextAreaWithTheme = withThemeInfo(Textarea);

Input.defaultProps = {
  placeholder: 'Search...',
  onChange: () => ({}),
  onFocus: () => ({}),
  onBlur: () => ({}),
};

Textarea.defaultProps = {
  placeholder: 'Message...',
  onChange: () => {},
  rows: 5,
};

export default withThemeInfo(Input);
