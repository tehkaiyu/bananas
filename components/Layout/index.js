import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <section className="Layout">
      <Navigation />
      {children}
    </section>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
