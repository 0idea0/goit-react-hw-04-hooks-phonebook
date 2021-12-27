import React from 'react';
import PropTypes from 'prop-types';

import PhonebookItem from './PhonebookItem';

import s from './Phonebook.module.css';

const Phonebook = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts.map(contact => (
            <li className={s.item} key={contact.id}>
              <PhonebookItem {...contact} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Phonebook.defaultProps = {
  contacts: [],
};

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
  onDelete: PropTypes.func.isRequired,
};

export default Phonebook;
