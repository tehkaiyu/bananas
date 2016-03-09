import React, { Component } from 'react';
import Link from '../Link';
import './Footer.scss';

const ScrollLink = require('react-scroll').Link;

export default class extends Component {
  render() {
    const smoothScroll = true;

    return (
      <section className="Footer-padding">
        <section className="Footer-wrapper">
          <footer className="Footer">
            <span className="Footer--copyright">
              ©2016 It's Bananas, All Rights Reserved
            </span>
            <nav className="Footer-menu">
              <ScrollLink className="Footer--link"
                href="/" onClick={Link.handleClick}
                to="about" smooth={smoothScroll} duration={500}>
                About
              </ScrollLink>
              <ScrollLink className="Footer--link"
                href="/" onClick={Link.handleClick}
                to="features" smooth={smoothScroll} duration={500}>
                Features
              </ScrollLink>
              <a className="Footer--link"
                href="/events" onClick={Link.handleClick}>
                Events
              </a>
            </nav>
          </footer>
        </section>
      </section>
    );
  }
}

