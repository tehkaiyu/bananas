import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <header className="Navigation">
      <div className="logo">
        <a href="">Bananas</a>
      </div>
      <nav className="Navigation-menu">
        <a className="Navigation--link" href="/" onClick={Link.handleClick}>About</a>
        <a className="Navigation--link" href="/" onClick={Link.handleClick}>Features</a>
        <a className="Navigation--link" href="/" onClick={Link.handleClick}>Nutrition</a>
        <a className="Navigation--signup" href="/">Sign up now</a>
      </nav>
    </header>
  );
}

export default Navigation;
