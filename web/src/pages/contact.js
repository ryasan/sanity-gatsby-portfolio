import React from 'react';

import Container from '../components/container';
import Layout from '../containers/layout';
import SEO from '../components/seo';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title='Contact' />
      <Container>
        <h1>Contact</h1>
      </Container>
    </Layout>
  );
};

export default ContactPage;