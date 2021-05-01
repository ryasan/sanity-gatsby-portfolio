import React from 'react';

import * as styles from './hero-banner.module.css';
import Container from '../container';
import Icon from '../icon';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const HeroBanner = ({isDark}) => (
  <div className={cn(styles.root, isDark && styles.whiteGradientBackground)}>
    <Container className={styles.container}>
      <div className={styles.topRow}>
        <h1 className={cn(styles.title, isDark && styles.colorBlack)}>Ryan Santos</h1>
        <div className={styles.subtitle}>Frontend Developer</div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.myStuff}>
          <Icon className={cn(styles.deskLamp, isDark && styles.colorBlack)} symbol='desk-lamp' />
          <div className={styles.screen}>
            <div className={styles.screenInner}>
              <div className={cn(styles.screenTrack)}>
                <div className={styles.code}></div>
                <div className={styles.code}></div>
                <div className={styles.code}></div>
              </div>
              <div className={cn(styles.frame, isDark && styles.borderColorBlack)}></div>
            </div>
            <div className={cn(styles.stand, isDark && styles.borderColorDarkGray)}></div>
            <div className={cn(styles.standNeck, isDark && styles.backgroundColorBlack)}></div>
            <div className={cn(styles.standBottom, isDark && styles.backgroundColorBlack)}></div>
          </div>
          <Icon className={cn(styles.coffee, isDark && styles.colorBlack)} symbol='coffee' />
        </div>
      </div>
    </Container>
  </div>
);

export default withThemeInfo(HeroBanner);
