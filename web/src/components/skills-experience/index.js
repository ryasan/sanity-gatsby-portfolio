import React from 'react';

import * as styles from './skills-experience.module.css';
import {responsiveTitle1} from '../typography.module.css';
import TagCloud from '../tag-cloud';

const paragraphs = [
  `My primary skills fall mostly under the frontend spectrum of the tech variety. However, I
   have experience in all areas of the stack and don't mind getting my hands dirty
   whether it be frontend, backend, or anything in between.`,
  `I've been part of teams employing scrum methodologies, involved in the feature
   planning processes, and more! Contact me if you'd
   like to find out.`,
];

const SkillsAndExperience = () => (
  <div className={styles.root}>
    <div className={styles.columnContainer}>
      <div className={styles.leftColumn}>
        <TagCloud />
      </div>
      <div className={styles.rightColumn}>
        <h2 className={responsiveTitle1}>Skills &amp; Experience</h2>
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
);

export default SkillsAndExperience;
