import React from 'react';
import PropTypes from 'prop-types';

import s from './Phonebook.module.css';

const PhonebookItem = ({ name, number, id, onDelete }) => {
  return (
    <>
      <span>
        {name} : {number}
      </span>
      <button type="button" className={s.close} onClick={() => onDelete(id)}>
        +
      </button>
    </>
  );
};

PhonebookItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PhonebookItem;
