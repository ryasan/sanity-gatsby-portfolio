import React from 'react';

import Container from '../components/container/index';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import Contact from '../components/contact/index';

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
