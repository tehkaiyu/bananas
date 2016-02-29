import React, { Component, PropTypes } from 'react';
import './Features.scss';

export default class extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    features: PropTypes.array,
  };

  render() {
    return (
      <section className="Features page-section">
        <h1 className="section--title">{this.props.title}</h1>
        <h3 className="section--subtitle">{this.props.subtitle}</h3>
        <ul className="Features-wrapper">
          {
            this.props.features.map((feature) =>
              <li className="Features--single" key={feature}>
                <img src="banana-icon.svg" alt="Feature:"/> {feature}
              </li>
            )
          }
        </ul>
        <footer className="Features-footer">
          <a className="button--join-now" href="">Join Now</a>
        </footer>
        <img className="Features-image--drink" src="banana-drink.png" alt="Banana Drink"/>
        <img className="Features-image--peel" src="banana-peel.png" alt="Banana Peel"/>
      </section>
    );
  }
}

