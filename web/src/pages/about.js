import React from 'react';

import {responsiveTitle1} from '../components/typography.module.css';
import Container from '../components/container';
import LatentPotential from '../components/latent-potential/index';
import SEO from '../components/seo';
import SkillsAndExperience from '../components/skills-experience';

const paragraphs = [
  `My name is Ryan Santos and I'm a frontend developer, pool player, skater, gamer, and proud father
	 of two lovable doggos. I always aim to pursue interests that are meaningful to me and
	 coding is one of the items on that list.`,
  `I haven't always been interested in software and my career background has been rooted elsewhere in technology.
   To me, application development just seemed like a path for the intellectually gifted and I really just never
   thought of myself as the type. Nonetheless, I started to put in work and developed new learning habits because
   it was interesting to me`,
  `I tried my best to stop myself from automatically dismissing things as too frustrating or requiring
   too much effort. Although, there were times where I wondered if I should quit. The imposter syndrome was
   real and it manifested itself to me in many different shapes and sizes. It was a frequent visitor that always
   overstayed its welcome.`,
];

const AboutPage = () => (
  <Container>
    <SEO title='About' />
    <div>
      <h2 className={responsiveTitle1}>Hello!</h2>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
    <LatentPotential />
    <SkillsAndExperience />
  </Container>
);

export default AboutPage;
