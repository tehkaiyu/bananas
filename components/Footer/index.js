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
              <ScrollLink to="about" smooth={smoothScroll} duration={500}>
                <a className="Footer--link" href="/" onClick={Link.handleClick}>About</a>
              </ScrollLink>
              <ScrollLink to="features" smooth={smoothScroll} duration={500}>
                <a className="Footer--link" href="/" onClick={Link.handleClick}>Features</a>
              </ScrollLink>
              <a className="Footer--link" href="/events" onClick={Link.handleClick}>Events</a>
            </nav>
          </footer>
        </section>
      </section>
    );
  }
}

