import React, {useContext} from 'react';
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
  const date = new Date().getFullYear();

  return (
    <div
      className={cn(
        styles.root,
        typeof window !== 'undefined' && window.innerWidth < 450 && showNav && styles.rootMobile,
      )}>
      {!ui?.uiIsLoaded && <LoaderContainer />}

      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.5}}}>
        <Header
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
        />
        <div className={styles.content}>{children}</div>
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
