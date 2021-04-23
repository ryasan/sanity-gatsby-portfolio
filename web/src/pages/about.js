import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import SEO from '../components/seo';
import Background from '../components/background';
import SkillsAndExperience from '../components/skills-experience';

const AboutPage = () => (
  <Layout>
    <Container>
      <SEO title='About' />
      <Background />
      <SkillsAndExperience />
    </Container>
  </Layout>
);

export default AboutPage;
