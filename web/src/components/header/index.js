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
        <div className={styles.branding}>
          <Link to='/'>
            <Icon symbol='my-initials' className={isDark && 'dark-color'} />
          </Link>
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
