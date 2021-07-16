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
        My name is Ryan Santos and I&apos;m a frontend developer, pool player, skater, gamer, and
        proud father of two lovable doggos. I always aim to pursue interests that are meaningful to
        me and coding is one of the items on that list.
      </p>
      <p>
        I haven&apos;t always been interested in software and my career background has been rooted
        elsewhere in technology. To me, application development just seemed like a path for the
        intellectually gifted and I really just never thought of myself as the type. Nonetheless, I
        started to put in work and developed new learning habits because it was interesting to me.
      </p>
      <p>
        At the beginning it was very easy for me to dismiss things as too frustrating or requiring
        too much effort. There were many times where I wondered if I should quit. The imposter
        syndrome was real and it was a frequent visitor that always overstayed its welcome.
      </p>
    </div>
    <LatentPotential />
    <SkillsAndExperience />
  </Container>
);

export default AboutPage;
