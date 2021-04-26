import React from 'react';

import {responsiveTitle1} from '../components/typography.module.css';
import Container from '../components/container';
import Layout from '../containers/layout';
import SEO from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title='Blog' />
      <Container>
        <h1 className={responsiveTitle1}>Blog</h1>
      </Container>
    </Layout>
  );
};

export default ContactPage;
