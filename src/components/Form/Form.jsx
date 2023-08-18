import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormWrapper,
  FormEl,
  LabelName,
  InputName,
  AddContactButton,
} from './Form.styled';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumbser] = useState('');

  // Відповідає за оновлення стану
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumbser(value);
        break;

      default:
        return;
    }
  };

  // Викликається під час відправлення форми
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number, id: 'id' + nanoid() };
    onSubmit(newContact);

    reset();
  };

  const reset = () => {
    setName('');
    setNumbser('');
  };

  // const { name, number } = this.state;

  return (
    <FormWrapper>
      <FormEl onSubmit={handleSubmit}>
        <LabelName htmlFor={name}>
          Name
          <InputName
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe,
          dash and spaces. For example Adrian, Jacob Mercer,
          Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelName>

        <LabelName htmlFor={number}>
          Number
          <InputName
            placeholder="Enter number"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelName>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </FormEl>
    </FormWrapper>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
