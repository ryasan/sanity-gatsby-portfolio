import React from 'react';
import {motion} from 'framer-motion';

import * as styles from './hero-banner.module.css';
import Icon from '../icon';
import {withThemeInfo} from '../../context/theme-context';
import {cn} from '../../lib/helpers';

const HeroBanner = ({isDark}) => (
  <div className={cn(styles.root, isDark && styles.whiteGradientBackground)}>
    <div className={styles.container}>
      <div className={styles.topRow}>
        <h1 className={cn(styles.title, isDark && styles.colorBlack)}>Ryan Santos</h1>
        <div className={styles.subtitle}>Frontend Developer</div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.myStuff}>
          <motion.div
            className={styles.itemContainer}
            initial={{left: '-8em', rotate: -50}}
            animate={{left: '25.5em', rotate: 0}}
            transition={{duration: 1.5, delay: 0.25, type: 'spring', bounce: 0.4}}>
            <Icon className={cn(styles.deskLamp, isDark && styles.colorBlack)} symbol='desk-lamp' />
          </motion.div>
          <motion.div>
            <div className={styles.screen} initial={{bottom: '-12em'}} animate={{bottom: '-100em'}}>
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
          </motion.div>
          <motion.div
            className={styles.itemContainer}
            initial={{right: '-6em', rotate: 50}}
            animate={{right: '27em', rotate: 0}}
            transition={{duration: 1.5, delay: 0.75, type: 'spring', bounce: 0.5}}>
            <Icon className={cn(styles.coffee, isDark && styles.colorBlack)} symbol='coffee' />
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

export default withThemeInfo(HeroBanner);
