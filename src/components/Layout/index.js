import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

import './layout.scss';

const TemplateWrapper = ({ children }) => (
  <main>
    <Navigation />
    {children}
  </main>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
