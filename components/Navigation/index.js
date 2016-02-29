import React from 'react';
import './Navigation.scss';
import Link from '../Link';
import Logo from '../Icon/Banana';

function Navigation() {
  return (
    <header className="Navigation">
      <a href="/" className="Navigation--logo">
        <Logo />
        Bananas
      </a>
      <nav className="Navigation-menu">
        <a className="Navigation--link" href="/">About</a>
        <a className="Navigation--link" href="/">Features</a>
        <a className="Navigation--link" href="/">Nutrition</a>
        <a className="Navigation--signup" href="/">Join now</a>
      </nav>
    </header>
  );
}

export default Navigation;
