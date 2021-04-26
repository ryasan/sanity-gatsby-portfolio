import React, {useState} from 'react';
import ParticlesJS from 'react-particles-js';

import * as styles from './hero-banner.module.css';
import Container from './container';
import MeImage from '../static/images/me.jpg';
import particlesParams from '../static/json/particles-params.json';
import Loader from './loader';
import {cn} from '../lib/helpers';

const HeroBanner = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={styles.root}>
      <ParticlesJS className={styles.particles} params={particlesParams} />
      <Container className={styles.container}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>Ryan Santos</h1>
          <div className={styles.subtitle}>Frontend Developer</div>
          <div className={styles.meImageContainer}>
            {isLoading && (
              <div className={styles.loaderContainer}>
                <Loader />
              </div>
            )}
            <div className={cn(styles.meImageInner, !isLoading && styles.visible)}>
              <img
                className={styles.meImage}
                src={MeImage}
                onLoad={() => setIsLoading(false)}
                alt='me'
              />
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
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
            <div className={styles.screen}>
              <div className={styles.screenInnerPortrait}>
                <div className={styles.screenTrackPortrait}>
                  <div className={styles.codePortrait}></div>
                  <div className={styles.codePortrait}></div>
                  <div className={styles.codePortrait}></div>
                </div>
                <div className={styles.framePortrait}></div>
              </div>
              <div className={styles.stand}></div>
              <div className={styles.standBottom}></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
