import React, {useState} from 'react';
import ParticlesJS from 'react-particles-js';

import * as styles from './hero-banner.module.css';
import Container from './container';
import MeImage from '../static/images/me.jpg';
import {particlesParams} from '../config/particles-params';
import Icon from './icon';
import {withThemeInfo} from '../context/theme-context';
import {cn} from '../lib/helpers';

const HeroBanner = ({isDark}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={cn(styles.root, isDark && 'dark-gray-background-color')}>
      <ParticlesJS className={styles.particles} params={particlesParams} />
      <Container className={styles.container}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>Ryan Santos</h1>
          <div className={styles.subtitle}>Frontend Developer</div>
          <div className={styles.meImageContainer}>
            <div className={cn(styles.meImageInner, !isLoading && styles.visible)}>
              <img
                className={styles.meImage}
                src={MeImage}
                onLoad={() => setIsLoading(false)}
                alt='me'
              />
            </div>
          </div>
          <ul className={styles.socialList}>
            <li
              className={styles.socialItem}
              onClick={() => window.open('https://codepen.io/ryasan86', '_blank')}
              tabIndex='0'>
              <Icon symbol='codepen' />
              <span>Codepen</span>
            </li>
            <li
              className={styles.socialItem}
              onClick={() => window.open('https://github.com/ryasan86', '_blank')}
              tabIndex='0'>
              <Icon symbol='github' />
              <span>Github</span>
            </li>
            <li
              className={styles.socialItem}
              onClick={() => window.open('https://www.linkedin.com/in/ryasan86', '_blank')}
              tabIndex='0'>
              <Icon symbol='linkedIn' />
              <span>LinkedIn</span>
            </li>
          </ul>
        </div>
        <div className={cn(styles.rightColumn, styles.hideIfTablet)}>
          <div className={styles.myStuff}>
            <div className={styles.screen}>
              <div className={styles.screenInnerLandscape}>
                <div className={styles.screenTrackLandscape}>
                  <div className={styles.codeLandscape}></div>
                  <div className={styles.codeLandscape}></div>
                  <div className={styles.codeLandscape}></div>
                </div>
                <div className={styles.frameLandscape}></div>
              </div>
              <div className={isDark ? styles.standDarkMode : styles.standLightMode}></div>
              <div className={styles.standBottom}></div>
            </div>
            <div className={styles.screen}>
              <div className={styles.screenInnerPortrait}>
                <div className={styles.screenTrackPortrait}>
                  <div className={styles.codePortrait}></div>
                  <div className={styles.codePortrait}></div>
                  <div className={styles.codePortrait}></div>
                </div>
                <div className={styles.framePortrait}></div>
              </div>
              <div className={isDark ? styles.standDarkMode : styles.standLightMode}></div>
              <div className={styles.standBottom}></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default withThemeInfo(HeroBanner);
