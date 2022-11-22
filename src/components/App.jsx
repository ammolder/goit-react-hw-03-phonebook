import { Wrapper } from './App.styled.js';
import { useState, useEffect } from 'react';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'hooks/useLocalStorage.js';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = data => {
    console.log('data :', data);
    data.id = nanoid();

    const names = contacts.map(item => item.name);
    if (names.includes(data.name)) {
      return alert(`${data.name} is already in contacts`);
    }

    setContacts(s => [data, ...s]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Phonebook onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts
        contacts={visibleContacts}
        onSubmit={addContact}
        onDeleteContact={deleteContact}
      />
    </Wrapper>
  );
};
