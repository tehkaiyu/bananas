import React, { Component } from 'react';
import Copy from '../core/Copy';

import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default class extends Component {

  render() {
    return (
      <section>
        <Header
          title={Copy.Header.title}
          subtitle={Copy.Header.subtitle}
        />
        <Testimonials
          title={Copy.Testimonials.title}
          subtitle={Copy.Testimonials.subtitle}
          testimonials={Copy.Testimonials.testimonials}
        />
        <Features
          title={Copy.Features.title}
          subtitle={Copy.Features.subtitle}
          features={Copy.Features.features}
        />
        <Footer />
      </section>
    );
  }

}
