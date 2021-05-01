import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';

import * as styles from './header.module.css';
import Icon from '../icon';
import ThemeToggleSwitch from '../theme-toggle-switch';
import {cn} from '../../lib/helpers';
import {withThemeInfo} from '../../context/theme-context';
import {isNullOrUndefined} from '../../lib/type-check-utils';

function Header({onHideNav, onShowNav, showNav, isDark}) {
  const [isTop, setIsTop] = useState(!isNullOrUndefined(window) && window.scrollY === 0);

  const onScroll = () => {
    if (!isNullOrUndefined(window)) {
      return window.scrollY === 0;
    }
  };

  useEffect(() => {
    if (!isNullOrUndefined(window)) {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div className={cn(styles.root, isDark && styles.rootDarkMode)}>
      <div className={styles.wrapper}>
        <div className={cn(styles.branding, isDark && styles.brandingDarkMode)}>
          {isTop ? (
            <Link to='/'>
              <Icon symbol='my-initials' />
            </Link>
          ) : (
            <Link to='/'>
              <Icon symbol='home' />
            </Link>
          )}
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </button>

        <nav className={cn(styles.nav, isDark && styles.navDarkMode, showNav && styles.showNav)}>
          <ul>
            <li className={styles.toggleSwitchContainer}>
              <ThemeToggleSwitch>{`${isDark ? 'Light' : 'Dark'} Mode`}</ThemeToggleSwitch>
            </li>
            <li>
              <Link to='/about/' className={styles.navLink} activeClassName={styles.navLinkActive}>
                About
              </Link>
            </li>
            <li>
              <Link to='/blog/' className={styles.navLink} activeClassName={styles.navLinkActive}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to='/projects/'
                className={styles.navLink}
                activeClassName={styles.navLinkActive}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to='/contact/'
                className={styles.navLink}
                activeClassName={styles.navLinkActive}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default withThemeInfo(Header);
