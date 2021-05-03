import React from 'react';

import Container from '../components/container';
import SEO from '../components/seo';
import Contact from '../components/contact';

const ContactPage = () => {
  return (
    <>
      <SEO title='Contact' />
      <Container>
        <Contact />
      </Container>
    </>
  );
};

export default ContactPage;
