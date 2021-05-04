import React from 'react';
import {Link} from 'gatsby';
import {useLocation} from '@gatsbyjs/reach-router';
import {motion} from 'framer-motion';

import * as styles from './header.module.css';
import Icon from '../icon';
import ThemeToggleSwitch from '../theme-toggle-switch';
import {cn} from '../../lib/helpers';
import {withThemeInfo} from '../../context/theme-context';

const show = {
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

const hide = {
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

const Nav = ({isDark, onHideNav, showNav}) => {
  return (
    <motion.nav
      className={cn(
        styles.navMobile,
        showNav && styles.navMobileOpen,
        isDark && styles.navDarkMode,
      )}>
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
  );
};

const InitialsIcon = ({isHome}) => (
  <motion.div className={styles.brandingInner} {...(isHome ? show : hide)}>
    <Link className={styles.brandingLink} to='/'>
      <Icon symbol='my-initials' />
    </Link>
  </motion.div>
);

const HomeIcon = ({isHome}) => (
  <motion.div className={styles.brandingInner} {...(isHome ? hide : show)}>
    <Link className={styles.brandingLink} to='/'>
      <Icon symbol='home' />
    </Link>
  </motion.div>
);

const Header = ({onHideNav, onShowNav, showNav, isDark}) => {
  const {pathname} = useLocation();
  const isHome = pathname === '/';

  return (
    <div className={cn(styles.root, isDark && styles.rootDarkMode)}>
      <Nav isDark={isDark} onHideNav={onHideNav} />

      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <InitialsIcon isHome={isHome} />
          <HomeIcon isHome={isHome} />
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol={showNav ? 'close' : 'hamburger'} />
        </button>
      </div>
    </div>
  );
};

Header.displayName = 'Header';

export default withThemeInfo(Header);
