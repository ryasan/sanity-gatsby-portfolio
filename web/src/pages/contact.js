import React from 'react';

import Container from '../components/container';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import Contact from '../components/contact';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title='Contact' />
      <Container>
        <Contact />
      </Container>
    </Layout>
  );
};

export default ContactPage;
