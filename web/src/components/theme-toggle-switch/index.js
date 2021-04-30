import React, {useContext} from 'react';

import * as styles from './theme-toggle-switch.module.css';
import MoonSVG from '../../static/images/moon.svg';
import SunSVG from '../../static/images/sun.svg';
import {withThemeInfo, ThemeContext} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

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
      <span className={cn(styles.slider, isDark && styles.sliderBeforeDarkMode)}></span>
      <img className={styles.icon} src={MoonSVG} alt='moon icon' />
      <img className={styles.icon} src={SunSVG} alt='sun icon' />
    </label>
  );
};

export default withThemeInfo(ThemeToggleSwitch);
