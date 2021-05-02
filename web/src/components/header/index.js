import React from 'react';
import {Link} from 'gatsby';

import * as styles from './header.module.css';
import Icon from '../icon';
import ThemeToggleSwitch from '../theme-toggle-switch';
import {cn} from '../../lib/helpers';
import {withThemeInfo} from '../../context/theme-context';

function Header({onHideNav, onShowNav, showNav, isDark}) {
  return (
    <div className={cn(styles.root, isDark && styles.rootDarkMode)}>
      <div className={styles.wrapper}>
        <div className={cn(styles.branding, isDark && styles.brandingDarkMode)}>
          <Link to='/'>
            <Icon symbol='my-initials' />
          </Link>
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </button>

        <nav className={cn(styles.nav, isDark && styles.navDarkMode, showNav && styles.showNav)}>
          <div className={styles.navInner}>
            <a className={styles.toggleSwitchContainer}>
              <ThemeToggleSwitch />
            </a>
            <Link className={styles.link} activeClassName={styles.linkActive} to='/about/'>
              About
            </Link>
            <Link className={styles.link} activeClassName={styles.linkActive} to='/blog/'>
              Blog
            </Link>
            <Link className={styles.link} activeClassName={styles.linkActive} to='/projects/'>
              Projects
            </Link>
            <Link className={styles.link} activeClassName={styles.linkActive} to='/contact/'>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default withThemeInfo(Header);
