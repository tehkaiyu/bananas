import React, { Component } from 'react';
import './Navigation.scss';
import AnimateIcon from '../Animate/AnimateIcon';
import Link from '../Link';
import Logo from '../Icon/Banana';

export default class extends Component {
  render() {
    return (
      <header className="Navigation">
        <a href="/" className="Navigation--logo">
          <Logo />
          <span className="Navigation--logo-prefix">It's</span>
          Bananas
        </a>
        <nav className="Navigation-menu">
          <a className="Navigation--link" href="/">About</a>
          <a className="Navigation--link" href="/">Features</a>
          <a className="Navigation--link" href="/">Nutrition</a>
          <AnimateIcon delay={1600}>
            <a className="Navigation--signup" href="https://itsbananas.slack.com">Join Now</a>
          </AnimateIcon>
        </nav>
      </header>
      );
  }
}
