import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name{' '}
    <input
      className={s.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
