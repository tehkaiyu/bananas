import React, { Component } from 'react';
import Copy from '../core/Copy';
import Header from '../components/Header';

export default class extends Component {

  render() {
    return (
      <section>
        <Header
          title={Copy.Header.title}
          subtitle={Copy.Header.subtitle}
        />
      </section>
    );
  }

}
