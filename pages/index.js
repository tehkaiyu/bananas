import React, { Component } from 'react';
import Copy from '../core/Copy';

import Header from '../components/Header';
import Testimonials from '../components/Testimonials';

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
      </section>
    );
  }

}
