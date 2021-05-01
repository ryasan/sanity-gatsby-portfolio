import React from 'react';

import * as styles from './hero-banner.module.css';
import Container from '../container';
import Icon from '../icon';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const HeroBanner = ({isDark}) => (
  <div className={cn(styles.root, isDark && 'dark-gray-background-color')}>
    <Container className={styles.container}>
      <div className={styles.topRow}>
        <h1 className={styles.title}>Ryan Santos</h1>
        <div className={styles.subtitle}>Frontend Developer</div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.myStuff}>
          <Icon className={styles.deskLamp} symbol='desk-lamp' />
          <div className={styles.screen}>
            <div className={styles.screenInner}>
              <div className={styles.screenTrack}>
                <div className={styles.code}></div>
                <div className={styles.code}></div>
                <div className={styles.code}></div>
              </div>
              <div className={styles.frame}></div>
            </div>
            <div className={styles.stand}></div>
            <div className={styles.standBottom}></div>
          </div>
          <Icon className={styles.coffee} symbol='coffee' />
        </div>
      </div>
    </Container>
  </div>
);

export default withThemeInfo(HeroBanner);
