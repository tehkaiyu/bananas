import React, { Component, PropTypes } from 'react';
import './Testimonials.scss';

export default class extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    testimonials: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      testimonialIndex: 0,
      currentTestimonial: props.testimonials[0],
    };
  }

  nextTestimonial = (event) => {
    event.preventDefault();
    this.changeTestimonial(1);
  }

  prevTestimonial = (event) => {
    event.preventDefault();
    this.changeTestimonial(-1);
  }

  changeTestimonial = (next) => {
    const testimonialIndex = this.state.testimonialIndex;
    const testimonialsLength = this.props.testimonials.length - 1;

    const setTestimonial = (index) => {
      this.setState({
        testimonialIndex: index,
        currentTestimonial: this.props.testimonials[index],
      });
    };

    if (next === 1) {
      if (testimonialIndex === testimonialsLength) {
        setTestimonial(0);
      } else {
        setTestimonial(testimonialIndex + 1);
      }
    } else {
      if (testimonialIndex === 0) {
        setTestimonial(testimonialsLength);
      } else {
        setTestimonial(testimonialIndex - 1);
      }
    }
  }

  render() {
    const testimonial = this.state.currentTestimonial;

    return (
      <section className="Testimonials page-section">
        <h1 className="section--title">{this.props.title}</h1>
        <h3 className="section--subtitle">{this.props.subtitle}</h3>
        <article className="Testimonials--block-wrapper">
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
        </article>
        <a href=""
          className="Testimonials--prev"
          onClick={ this.prevTestimonial }>
          Prev
        </a>
        <a href=""
          className="Testimonials--next"
          onClick={ this.nextTestimonial }>
          Next
        </a>
      </section>
    );
  }
}

