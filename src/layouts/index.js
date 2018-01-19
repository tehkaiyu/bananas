import React from 'react'
import PropTypes from 'prop-types'
import Navigation from 'components/Navigation'

import 'core/layout.scss'

const TemplateWrapper = ({ children }) => (
  <main>
    <Navigation />
    {children()}
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
