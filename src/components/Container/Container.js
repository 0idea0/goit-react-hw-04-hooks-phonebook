import React from 'react';
import PropTypes from 'prop-types';

import s from './Container.module.css';

const Container = ({ title, children }) => (
  <section className={s.section}>
    {title && <h2 className={s.heading}>{title}</h2>}
    {children}
  </section>
);

Container.defaultProps = {
  title: '',
  children: [],
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
