import React, { Component } from 'react';

import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';

export default class extends Component {

  render() {
    return (
      <section>
        <ComingSoon />
        <Footer />
      </section>
    );
  }

}
