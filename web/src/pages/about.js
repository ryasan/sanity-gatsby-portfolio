import React from 'react';

import {responsiveTitle1} from '../components/typography.module.css';
import Container from '../components/container';
import LatentPotential from '../components/latent-potential/index';
import SEO from '../components/seo';
import SkillsAndExperience from '../components/skills-experience';

const AboutPage = () => (
  <Container>
    <SEO title='About' />
    <div>
      <h2 className={responsiveTitle1}>Hello!</h2>
      <p>
        My name is Ryan Santos and I&apos;m a frontend engineer, pool player, skater, gamer, and
        proud father of two lovable doggos. I always aim to pursue interests that are meaningful to
        me and building stuff with code happens to be one of the items on that list.
      </p>
      <p>
        I haven&apos;t always been interested in software though and my career background has
        actually been rooted elsewhere in technology. To me, application development just seemed
        like a path for the intellectually gifted and I really just never thought of myself as the
        type. Nevertheless, there was something fun and interesting about it so I started a new
        chapter in my career.
      </p>
      <p>
        At the beginning it was very easy for me to dismiss things as too frustrating or requiring
        too much effort. There were many times where I wondered if I should quit. The imposter
        syndrome was real and it was a frequent visitor that always overstayed its freaking welcome.
      </p>
    </div>
    <LatentPotential />
    <SkillsAndExperience />
  </Container>
);

export default AboutPage;
