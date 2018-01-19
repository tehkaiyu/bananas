import React, { Component } from 'react';
import AnimateIcon from '../Animate/AnimateIcon';
import Logo from '../Icon/Banana';
import { Link } from 'react-scroll';

import './Navigation.scss';

export default class extends Component {
  render() {
    const smoothScroll = true;

    return (
      <header className="Navigation">
        <a href="/" className="Navigation--logo">
          <Logo />
          <span className="Navigation--logo-prefix">It's</span>
          Bananas
        </a>
        <nav className="Navigation-menu">
          <Link
            className="Navigation--link"
            href="/"
            to="about"
            smooth={smoothScroll}
            duration={500}
          >
            About
          </Link>
          <Link
            className="Navigation--link"
            href="/"
            to="features"
            smooth={smoothScroll}
            duration={500}
          >
            Features
          </Link>
          <AnimateIcon delay={1600}>
            <a
              className="Navigation--signup"
              href="https://itsbananas.slack.com"
            >
              Join Now
            </a>
          </AnimateIcon>
        </nav>
      </header>
    );
  }
}
