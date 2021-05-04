import React, {useContext, useEffect} from 'react';

import * as styles from './theme-toggle-switch.module.css';
import MoonSVG from '../../static/images/moon.svg';
import SunSVG from '../../static/images/sun.svg';
import {withThemeInfo, ThemeContext} from '../../context/theme-context';
import {cn} from '../../lib/helpers';
import {isNullOrUndefined} from '../../lib/type-check-utils';
import {UIContext} from '../../context/ui-context';

const ThemeToggleSwitch = ({isDark}) => {
  const ui = useContext(UIContext);
  const {theme, toggleTheme, changeTheme} = useContext(ThemeContext);

  const cacheThemePreference = () => {
    if (typeof window !== 'undefined') window.localStorage.setItem('theme', theme);
  };

  const handleChange = () => {
    toggleTheme();
    cacheThemePreference();
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const cachedTheme = window.localStorage.getItem('theme');

      if (!isNullOrUndefined(cachedTheme)) changeTheme(cachedTheme);
      document.body.classList.add(cachedTheme);

      if (!isNullOrUndefined(ui)) ui.setUiIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <label className={styles.root}>
      <input
        className={styles.input}
        onChange={handleChange}
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
