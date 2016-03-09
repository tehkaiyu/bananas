import React, { Component } from 'react';
import './Navigation.scss';
import AnimateIcon from '../Animate/AnimateIcon';
import Link from '../Link';
import Logo from '../Icon/Banana';

const ScrollLink = require('react-scroll').Link;

export default class extends Component {
  render() {
    const smoothScroll = true;

    return (
      <header className="Navigation">
        <a href="/" className="Navigation--logo" onClick={Link.handleClick}>
          <Logo />
          <span className="Navigation--logo-prefix">It's</span>
          Bananas
        </a>
        <nav className="Navigation-menu">
          <ScrollLink className="Navigation--link"
            href="/" onClick={Link.handleClick}
            to="about" smooth={smoothScroll} duration={500}>
            About
          </ScrollLink>
          <ScrollLink className="Navigation--link"
            href="/" onClick={Link.handleClick}
            to="features" smooth={smoothScroll} duration={500}>
            Features
          </ScrollLink>
          <a className="Navigation--link"
            href="/events" onClick={Link.handleClick}>
            Events
          </a>
          <AnimateIcon delay={1600}>
            <a className="Navigation--signup" href="https://itsbananas.slack.com">Join Now</a>
          </AnimateIcon>
        </nav>
      </header>
      );
  }
}
