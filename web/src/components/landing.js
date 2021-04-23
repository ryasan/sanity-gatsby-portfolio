import React from 'react';

import Container from './container';
// import BoardImage from '../static/board.svg';
import * as styles from './landing.module.css';

const Landing = () => (
  <div className={styles.root}>
    <Container className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>Ryan Santos</h1>
        <div className={styles.subtitle}>Frontend Developer</div>
      </div>
      <div className={styles.rightColumn}>
        {/* <div className={styles.board}>
          <img className={styles.boardImage} src={BoardImage} alt='board' />
        </div> */}

        <div className={styles.myStuff}>
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

export default Landing;
