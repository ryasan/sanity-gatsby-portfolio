import React from 'react';

import {responsiveTitle1} from '../components/typography.module.css';
import Container from '../components/container';
import SEO from '../components/seo';
import SkillsAndExperience from '../components/skills-experience';

const paragraphs = [
  `My name is Ryan Santos and I'm a frontend developer, skater, pool player, and proud
   father of a chiweenie and french bulldog. I always aim to pursue interests that are
   meaningful to me and coding is one of the items on that list.`,
  `I haven't always been interested in software. My career background has actually been
   rooted in support and hardware. To me, it seemed like a path for the intellectually gifted
   and I never thought of myself the type.`,
  `While working as a hardware guy and as time passed, I was gradually exposed to the software
   side of things. I found development to be more my thing so I switched gears and started a
   new chapter in my life. Fast forward to today and now I'm into all things development
   & design!`,
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
