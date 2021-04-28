import React from 'react';
import ParticlesJS from 'react-particles-js';

import * as styles from './hero-banner.module.css';
import Container from '../container';
import MeImage from '../../static/images/me.jpg';
import SocialList from '../social';
import {particlesParams} from './particles-params';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const HeroBanner = ({isDark}) => (
  <div className={cn(styles.root, isDark && 'dark-gray-background-color')}>
    <ParticlesJS className={styles.particles} params={particlesParams} />
    <Container className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>Ryan Santos</h1>
        <div className={styles.subtitle}>Frontend Developer</div>
        <div className={styles.meImageContainer}>
          <div className={styles.meImageInner}>
            <img className={styles.meImage} src={MeImage} alt='me' />
          </div>
        </div>
        {/* <SocialList /> */}
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

export default withThemeInfo(HeroBanner);
