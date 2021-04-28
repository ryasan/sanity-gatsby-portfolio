import React, {useContext} from 'react';
import {Link} from 'gatsby';

import * as styles from './header.module.css';
import Icon from '../icon';
import MoonSVG from '../../static/images/moon.svg';
import SunSVG from '../../static/images/sun.svg';
import {cn} from '../../lib/helpers';
import {ThemeContext, withThemeInfo} from '../../context/theme-context';

function Header({onHideNav, onShowNav, showNav, isDark}) {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <div className={isDark ? styles.rootDarkMode : styles.rootLightMode}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to='/'>
            <Icon symbol='my-initials' className={isDark ? '' : 'dark-color'} />
          </Link>
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </button>

        <nav
          className={cn(
            isDark ? styles.navDarkMode : styles.navLightMode,
            showNav && styles.showNav,
          )}>
          <ul>
            <li
              onClick={toggleTheme}
              className={isDark ? styles.buttonLightMode : styles.buttonDarkMode}
              tabIndex={0}>
              <span>{`${isDark ? 'Light' : 'Dark'} Mode`}</span>
              <img src={isDark ? SunSVG : MoonSVG} alt='toggle-button-image' />
            </li>
            <li className={styles.navLink}>
              <Link to='/about/'>About</Link>
            </li>
            <li className={styles.navLink}>
              <Link to='/projects/'>Projects</Link>
            </li>
            <li className={styles.navLink}>
              <Link to='/blog/'>Blog</Link>
            </li>
            <li className={styles.navLink}>
              <Link to='/contact/'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default withThemeInfo(Header);