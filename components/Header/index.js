import React, { Component, PropTypes } from 'react';
import './Header.scss';

export default class extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };

  render() {
    return (
      <section className="Main-header page-section">
        <h1 className="section--title">{this.props.title}</h1>
        <h3 className="section--subtitle">{this.props.subtitle}</h3>
        <img className="Main-header--banana" src="banana-header.png" alt="It's Bananas"/>
      </section>
    );
  }
}

