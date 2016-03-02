import React, { Component, PropTypes } from 'react';
import './Testimonials.scss';

export default class extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    testimonials: PropTypes.array,
  };

  render() {
    return (
      <section className="Testimonials page-section">
        <h1 className="section--title">{this.props.title}</h1>
        <h3 className="section--subtitle">{this.props.subtitle}</h3>
        <article className="Testimonials--block-wrapper">
          {
            this.props.testimonials.map((testimonial) =>
              <blockquote className="Testimonials--block" key={testimonial.author.name}>
                <p className="Testimonials--quote">
                  {testimonial.quote}
                </p>
                <footer className="Testimonials--author">
                  <cite className="Testimonials--author-name">
                    {testimonial.author.name}
                  </cite>
                  <span className="Testimonials--author-image">
                    <img
                      src={`testimonials/${testimonial.author.image}`}
                      alt={testimonial.author.name}
                    />
                  </span>
                </footer>
              </blockquote>
            )
          }
        </article>
      </section>
    );
  }
}

