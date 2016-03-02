import React, { Component } from 'react';
import './Footer.scss';

export default class extends Component {
  render() {
    return (
      <section className="Footer-padding">
        <section className="Footer-wrapper">
          <footer className="Footer">
            <span className="Footer--copyright">
              ©2016 It's Bananas, All Rights Reserved
            </span>
            <nav className="Footer-menu">
              <a className="Footer--link" href="/">About</a>
              <a className="Footer--link" href="/">Features</a>
              <a className="Footer--link" href="/events">Events</a>
            </nav>
          </footer>
        </section>
      </section>
    );
  }
}

