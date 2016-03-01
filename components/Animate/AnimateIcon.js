import React, { Component, PropTypes } from 'react';

export default class extends Component {
  static propTypes = {
    title: PropTypes.string,
    delay: PropTypes.number,
  };

  componentDidMount() {
    const mojs = require('mo-js');

    function Animocon(el, options) {
      this.el = el;
      this.options = Object.assign({}, this.options);
      Object.assign(this.options, options);

      this.timeline = new mojs.Timeline();

      for (let i = 0, len = this.options.tweens.length; i < len; ++i) {
        this.timeline.add(this.options.tweens[i]);
      }

      this.timeline.start();
    }

    Animocon.prototype.options = {
      tweens: [
        new mojs.Burst({
          shape: 'circle',
          isRunLess: true,
        }),
      ],
    };

    setTimeout(() => {
      const el = this.refs.iconWrapper;
      const elspan = el.querySelector('span');

      new Animocon(el, {
        tweens: [
          // burst animation
          new mojs.Burst({
            parent: el,
            duration: 1500,
            delay: 300,
            shape: 'circle',
            fill: [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
            x: '50%',
            y: '50%',
            opacity: 0.6,
            radius: {40: 90},
            count: 6,
            isRunLess: true,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
          }),
          // ring animation
          new mojs.Transit({
            parent: el,
            duration: 750,
            type: 'circle',
            radius: {0: 50},
            fill: 'transparent',
            stroke: '#988ADE',
            strokeWidth: {35: 0},
            opacity: 0.6,
            x: '50%',
            y: '50%',
            isRunLess: true,
            easing: mojs.easing.bezier(0, 1, 0.5, 1),
          }),
          // icon scale animation
          new mojs.Tween({
            duration: 1100,
            onUpdate: (progress) => {
              if (progress > 0.3) {
                const elasticOutProgress = mojs.easing.elastic.out(1.43 * progress - 0.43);
                elspan.style.WebkitTransform = elspan.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
              } else {
                elspan.style.WebkitTransform = elspan.style.transform = 'scale3d(0,0,1)';
              }
            },
          }),
        ],
      });
    }, this.props.delay || 100);
  }

  render() {
    return (
      <span className="animicon" ref="iconWrapper">
        <span>{this.props.children}</span>
      </span>
    );
  }
}
