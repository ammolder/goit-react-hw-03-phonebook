import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './Phonebook.styled';

export const Phonebook = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputID = nanoid();
  const numberInputID = nanoid();

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  const handleNameChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputID}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            id={nameInputID}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={numberInputID}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleNameChange}
            id={numberInputID}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit ">Add contact</Button>
      </Form>
    </>
  );
};

// export class Phonebook extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   nameInputID = nanoid();
//   numberInputID = nanoid();

//   handleNameChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     console.log('this.state :', this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <>
//         <Form onSubmit={this.handleSubmit}>
//           <Label htmlFor={this.nameInputID}>
//             Name
//             <Input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleNameChange}
//               id={this.nameInputID}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </Label>
//           <Label htmlFor={this.numberInputID}>
//             Number
//             <Input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleNameChange}
//               id={this.numberInputID}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </Label>
//           <Button type="submit ">Add contact</Button>
//         </Form>
//       </>
//     );
//   }
// }
