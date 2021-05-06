import React, {useContext, useEffect, useState} from 'react';
import {motion} from 'framer-motion';

import * as styles from './layout.module.css';
import '../../styles/layout.css';
import Header from '../header';
import SocialList from '../social';
import Loader from '../../components/loader';
import {UIContext} from '../../context/ui-context';
import {cn} from '../../lib/helpers';

const LoaderContainer = () => (
  <motion.div
    initial={{opacity: 1}}
    animate={{opacity: 1, transition: {duration: 0.5}}}
    className={styles.loader}>
    <Loader />
  </motion.div>
);

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => {
  const ui = useContext(UIContext);
  const [isTop, setIsTop] = useState(typeof window !== 'undefined' && window.scrollY === 0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 450;
  const date = new Date().getFullYear();

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const onScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 0) setIsTop(false);
      else setIsTop(true);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div className={cn(styles.root, isMobile && showNav && styles.rootMobile)} id='top'>
      {!ui?.uiIsLoaded && <LoaderContainer />}

      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5}}}>
        <Header
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
        />
        <div className={styles.content}>{children}</div>
        {isMobile && (
          <motion.a
            className={styles.scrollTop}
            animate={{opacity: !isTop ? 1 : 0}}
            transition={{delay: 0.2}}
            onClick={scrollTop}>
            <svg viewBox='0 0 24 24' fill='currentColor'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M7 14l5-5 5 5z' />
            </svg>
          </motion.a>
        )}
        <footer className={styles.footer}>
          <div className={styles.footerWrapper}>
            <SocialList />
            <div className={styles.siteInfo}>
              © {date}, Built with <a href='https://www.sanity.io'>Sanity</a>
              {` `}
              &amp;
              {` `}
              <a href='https://www.gatsbyjs.org'>Gatsby</a>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Layout;
