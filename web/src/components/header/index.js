import React from 'react';
import {Link} from 'gatsby';
import {useLocation} from '@gatsbyjs/reach-router';
import {motion} from 'framer-motion';

import * as styles from './header.module.css';
import Icon from '../icon';
import HamburgerMenu from './hamburger';
import ThemeToggleSwitch from '../theme-toggle-switch';
import {cn} from '../../lib/helpers';
import {withThemeInfo} from '../../context/theme-context';

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transitionEnd: {
      zIndex: 1,
    },
  },
  transition: {
    duration: 0.5,
    ease: 'linear',
  },
};

const fadeOut = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transitionEnd: {
      zIndex: 0,
    },
  },
  transition: {
    duration: 0.5,
    ease: 'linear',
  },
};

const expand = {
  animate: {
    height: 'calc(100vh - 4em)',
  },
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

const collapse = {
  animate: {
    height: 0,
  },
  transition: {
    duration: 0.3,
    ease: 'easeIn',
  },
};

const Header = ({onHideNav, onShowNav, showNav, isDark}) => {
  const {pathname} = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={cn(styles.root, isDark && styles.rootDarkMode)}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <motion.div className={styles.brandingInner} {...(isHome ? fadeIn : fadeOut)}>
            <Link className={styles.brandingLink} to='/' onClick={onHideNav}>
              <Icon symbol='my-initials' />
            </Link>
          </motion.div>
          <motion.div
            className={styles.brandingInner}
            onClick={onHideNav}
            {...(isHome ? fadeOut : fadeIn)}>
            <Link className={styles.brandingLink} to='/' onClick={onHideNav}>
              <Icon symbol='home' />
            </Link>
          </motion.div>
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <HamburgerMenu showNav={showNav} />
        </button>

        <motion.nav
          className={cn(styles.nav, isDark && styles.navDarkMode)}
          {...(showNav ? expand : collapse)}>
          <div className={styles.navInner}>
            <a className={styles.toggleSwitchContainer}>
              <ThemeToggleSwitch />
            </a>
            <Link
              className={styles.link}
              activeClassName={styles.linkActive}
              to='/about/'
              onClick={onHideNav}>
              About
            </Link>
            <Link
              className={styles.link}
              activeClassName={styles.linkActive}
              to='/blog/'
              onClick={onHideNav}>
              Blog
            </Link>
            <Link
              className={styles.link}
              activeClassName={styles.linkActive}
              to='/projects/'
              onClick={onHideNav}>
              Projects
            </Link>
            <Link
              className={styles.link}
              activeClassName={styles.linkActive}
              to='/contact/'
              onClick={onHideNav}>
              Contact
            </Link>
          </div>
        </motion.nav>
      </div>
    </div>
  );
};

Header.displayName = 'Header';

export default withThemeInfo(Header);
