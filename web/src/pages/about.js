import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import SEO from '../components/seo';
import TagCloud from '../components/tag-cloud';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title='About' />
      <h2>Background</h2>
      <div className='top-row'>
        <p>
          My name is Ryan Santos and I&apos;m a frontend developer, skater, pool player, and proud
          father of a chiweenie and french bulldog. I always aim to pursue interests that are
          meaningful to me and coding is one of the items on that list.
        </p>
        <p>
          I haven&apos;t always been interested in software. My career background has actually been
          rooted in support and hardware. To me, it seemed like a path for the intellectually gifted
          and I never thought of myself the type.
        </p>
        <p>
          While working as a hardware guy and as time passed, I was gradually exposed to the
          software side of things. I quickly found development to be much more fulfilling so I
          started a new chapter in my life. Fast forward to today and now I&apos;m into all things
          development &amp; design!
        </p>
      </div>
      <h2>Skills &amp; Experience</h2>
      <div className='bottom-Row'>
        <div className='left-column'></div>
        <div className='right-column'>
          <TagCloud />
        </div>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
