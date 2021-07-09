import React from 'react';

import {responsiveTitle1} from '../components/typography.module.css';
import Container from '../components/container';
import SEO from '../components/seo';
import SkillsAndExperience from '../components/skills-experience';

const paragraphs = [
  `My name is Ryan Santos and I'm a frontend developer, pool player, skater, gamer, and proud father
	 of a chiweenie and french bulldog. I always aim to pursue interests that are meaningful to me and
	 coding is one of the items on that list.`,
  `I haven't always been interested in software. My career background has actually been rooted elsewhere
   in technology. To me, application development just seemed like a path for the intellectually gifted
   and I never thought of myself as the type.`,
  `After a while I started to adopt the notion that software was more about belief in yourself more
	 than anything, even having a big 🧠 (although that probably helps). So I switched gears and started
   a new chapter. Now I'm into all things development and design!`,
];

const AboutPage = () => (
  <Container>
    <SEO title='About' />
    <div>
      <h2 className={responsiveTitle1}>Background</h2>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
    <SkillsAndExperience />
  </Container>
);

export default AboutPage;
