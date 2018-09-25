import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import './Testimonials.scss';

import LeftArrow from '../Icon/LeftArrow';
import RightArrow from '../Icon/RightArrow';

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    testimonials: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.animationTime = 1500;
    this.state = {
      testimonialIndex: 0,
      currentTestimonial: props.testimonials[0],
      toggleDisabled: false,
    };
  }

  nextTestimonial = event => {
    event.preventDefault();
    if (!this.state.toggleDisabled) {
      this.changeTestimonial(1);
    }
  };

  prevTestimonial = event => {
    event.preventDefault();
    if (!this.state.toggleDisabled) {
      this.changeTestimonial(-1);
    }
  };

  changeTestimonial = next => {
    const testimonialIndex = this.state.testimonialIndex;
    const testimonialsLength = this.props.testimonials.length - 1;
    const resetToggle = () => this.setState({ toggleDisabled: false });

    const setTestimonial = index => {
      this.setState({
        testimonialIndex: index,
        currentTestimonial: this.props.testimonials[index],
        toggleDisabled: true,
      });

      setTimeout(resetToggle, this.animationTime + 100);
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
  };

  render() {
    const testimonial = this.state.currentTestimonial;
    const animationTime = this.animationTime;

    return (
      <section className="Testimonials page-section">
        <h1 className="section--title">{this.props.title}</h1>
        <h3 className="section--subtitle">{this.props.subtitle}</h3>
        <TransitionGroup
          className="Testimonials--block-wrapper"
          component="article"
          transitionName="Testimonials--fade"
          transitionEnterTimeout={animationTime}
          transitionLeaveTimeout={animationTime}
        >
          <blockquote
            className="Testimonials--block"
            key={testimonial.author.name}
          >
            <p className="Testimonials--quote">{testimonial.quote}</p>
            <footer className="Testimonials--author">
              <cite className="Testimonials--author-name">
                {testimonial.author.name}
              </cite>
              <span className="Testimonials--author-image">
                <img
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                />
              </span>
            </footer>
            <a
              href=""
              className="Testimonials--prev"
              onClick={this.prevTestimonial}
            >
              <LeftArrow />
            </a>
            <a
              href=""
              className="Testimonials--next"
              onClick={this.nextTestimonial}
            >
              <RightArrow />
            </a>
          </blockquote>
        </TransitionGroup>
      </section>
    );
  }
}
