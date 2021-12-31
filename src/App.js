import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

import FormContact from './components/FormContact/FormContact';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts!`);
    }
    if (contacts.find(contact => contact.number === number)) {
      return alert(`${number} is already belongs to another contact!`);
    }

    const newContact = {
      id: shortid(),
      name,
      number,
    };

    setContacts([newContact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <FormContact onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
