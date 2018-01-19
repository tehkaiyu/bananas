import React from 'react';
import copy from 'core/copy';
import Header from 'components/Header';
import Testimonials from 'components/Testimonials';
import Features from 'components/Features';
import Footer from 'components/Footer';
import { Element } from 'react-scroll';

const IndexPage = () => (
  <section>
    <Header title={copy.header.title} subtitle={copy.header.subtitle} />
    <Element name="about">
      <Testimonials
        title={copy.testimonials.title}
        subtitle={copy.testimonials.subtitle}
        testimonials={copy.testimonials.testimonials}
      />
    </Element>
    <Element name="features">
      <Features
        title={copy.features.title}
        subtitle={copy.features.subtitle}
        features={copy.features.features}
      />
    </Element>
    <Footer />
  </section>
);

export default IndexPage;
