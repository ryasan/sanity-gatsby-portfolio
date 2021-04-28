import React, {useState, useEffect} from 'react';
import ParticlesJS from 'react-particles-js';

import * as styles from './hero-banner.module.css';
import Container from './container';
import MeImage from '../static/images/me.jpg';
import {particlesParams as initialOptions} from '../config/particles-params';
import Icon from './icon';
import {withThemeInfo} from '../context/theme-context';
import {cn} from '../lib/helpers';
import {screens} from '../lib/media';
import {isNullOrUndefined} from '../lib/type-check-utils';

const HeroBanner = ({isDark}) => {
  const [options, setOptions] = useState(initialOptions);

  const openLink = (link) => {
    if (typeof window === 'undefined') window.open(link);
  };

  const changeNumberOfParticles = (value) => {
    setOptions((prev) => ({
      ...prev,
      particles: {...prev.particles, number: {...prev.particles.number, value}},
    }));
  };

  const onResize = () => {
    if (isNullOrUndefined(window)) return;
    if (window.innerWidth < screens.minSmall) changeNumberOfParticles(15);
    if (window.innerWidth >= screens.minSmall) changeNumberOfParticles(50);
  };

  useEffect(() => {
    if (isNullOrUndefined(window)) return;
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (isNullOrUndefined(window)) return;
    if (window.innerWidth < screens.minSmall) changeNumberOfParticles(15);
    if (window.innerWidth >= screens.minSmall) changeNumberOfParticles(50);
  }, []);

  return (
    <div className={cn(styles.root, isDark && 'dark-gray-background-color')}>
      <ParticlesJS className={styles.particles} params={options} />
      <Container className={styles.container}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>Ryan Santos</h1>
          <div className={styles.subtitle}>Frontend Developer</div>
          <div className={styles.meImageContainer}>
            <div className={styles.meImageInner}>
              <img className={styles.meImage} src={MeImage} alt='me' />
            </div>
          </div>
          <ul className={styles.socialList}>
            <li
              className={styles.socialItem}
              onClick={() => openLink('https://codepen.io/ryasan86')}
              tabIndex='0'>
              <Icon symbol='codepen' />
              <span>Codepen</span>
            </li>
            <li
              className={styles.socialItem}
              onClick={() => openLink('https://github.com/ryasan86')}
              tabIndex='0'>
              <Icon symbol='github' />
              <span>Github</span>
            </li>
            <li
              className={styles.socialItem}
              onClick={() => openLink('https://www.linkedin.com/in/ryasan86')}
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
