import React from 'react';

import TagCloud from './tag-cloud';
import * as styles from './skills-experience.module.css';

const SkillsAndExperience = () => {
  return (
    <div className={styles.root}>
      <div className={styles.columnContainer}>
        <div className={styles.leftColumn}>
          <TagCloud />
        </div>
        <div className={styles.rightColumn}>
          <h2 className={styles.title}>Skills &amp; Experience</h2>
          <p className='skills__paragraph'>
            My primary skills fall mostly under the frontend spectrum of the tech variety. However,
            I have experience in all areas of the stack and don&apos;t mind getting my hands dirty
            whether it be frontend, backend, or anything in between.
          </p>
          <p className='skills__paragraph'>
            I&apos;ve been part of teams employing scrum methodologies, involved in the feature
            planning processes, Git rebase and merge workflows...and more. Contact me if you&apos;d
            like to know more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;
