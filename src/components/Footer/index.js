import React, { Component } from 'react'
import { Link } from 'react-scroll'

import './Footer.scss'

export default class extends Component {
  render() {
    const smoothScroll = true

    return (
      <section className="Footer-padding">
        <section className="Footer-wrapper">
          <footer className="Footer">
            <span className="Footer--copyright">
              ©2016 It's Bananas, All Rights Reserved
            </span>
            <nav className="Footer-menu">
              <Link
                className="Footer--link"
                href="/"
                to="about"
                smooth={smoothScroll}
                duration={500}
              >
                About
              </Link>
              <Link
                className="Footer--link"
                href="/"
                to="features"
                smooth={smoothScroll}
                duration={500}
              >
                Features
              </Link>
            </nav>
          </footer>
        </section>
      </section>
    )
  }
}
