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
            initial={{x: '-200%', rotate: -90}}
            animate={{x: 'calc(50vw - 22em)', rotate: 0}}
            transition={{duration: 1.5, delay: 0.5, type: 'spring', bounce: 0.38}}>
            <Icon className={cn(styles.deskLamp, isDark && styles.colorBlack)} symbol='desk-lamp' />
          </motion.div>
          <motion.div initial={{bottom: '-12em'}} animate={{bottom: '-100em'}}>
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
          </motion.div>
          <motion.div
            className={styles.itemContainer}
            initial={{x: 'calc(100vw + 3.5em)', rotate: 90}}
            animate={{x: 'calc(50vw + 15.5em)', rotate: 0}}
            transition={{duration: 1.5, delay: 1, type: 'spring', bounce: 0.415}}>
            <Icon className={cn(styles.coffee, isDark && styles.colorBlack)} symbol='coffee' />
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

export default withThemeInfo(HeroBanner);
