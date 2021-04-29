import React, {useContext} from 'react';

import * as styles from './theme-toggle-switch.module.css';
import {withThemeInfo, ThemeContext} from '../../context/theme-context';

const ThemeToggleSwitch = ({isDark}) => {
  const {toggleTheme} = useContext(ThemeContext);

  return (
    <label className={styles.root}>
      <input
        className={styles.input}
        onChange={toggleTheme}
        checked={isDark}
        type='checkbox'
        role='button'
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default withThemeInfo(ThemeToggleSwitch);
