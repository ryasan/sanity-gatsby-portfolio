import React from 'react';
import {Link} from 'gatsby';

import * as styles from './header.module.css';
import Icon from '../icon';
import ThemeToggleSwitch from '../theme-toggle-switch';
import {cn} from '../../lib/helpers';
import {withThemeInfo} from '../../context/theme-context';

function Header({onHideNav, onShowNav, showNav, isDark}) {
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
            <li className={styles.toggleSwitchContainer}>
              <ThemeToggleSwitch>{`${isDark ? 'Light' : 'Dark'} Mode`}</ThemeToggleSwitch>
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
