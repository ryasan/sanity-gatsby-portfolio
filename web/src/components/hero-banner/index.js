import React from 'react';
import ParticlesJS from 'react-particles-js';

import * as styles from './hero-banner.module.css';
import Container from '../container';
import {particlesParams} from './particles-params';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const HeroBanner = ({isDark}) => (
  <div className={cn(styles.root, isDark && 'dark-gray-background-color')}>
    <ParticlesJS className={styles.particles} params={particlesParams} />
    <Container className={styles.container}>
      <div className={styles.topRow}>
        <h1 className={styles.title}>Ryan Santos</h1>
        <div className={styles.subtitle}>Frontend Developer</div>
      </div>
      <div className={styles.bottomRow}>
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
            <div className={styles.stand}></div>
            <div className={styles.standBottom}></div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default withThemeInfo(HeroBanner);
