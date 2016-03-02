import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class extends Component {

  render() {
    return (
      <section>
        <Header
          title="Coming Soon"
          subtitle="It'll be Bananas"
        />
        <Footer />
      </section>
    );
  }

}
