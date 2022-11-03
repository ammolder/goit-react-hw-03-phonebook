import { Wrapper } from './App.styled.js';
import { Component } from 'react';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    data.id = nanoid();

    const names = this.state.contacts.map(item => item.name);
    if (names.includes(data.name)) {
      return alert(`${data.name} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <Phonebook onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onSubmit={this.addContact}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
