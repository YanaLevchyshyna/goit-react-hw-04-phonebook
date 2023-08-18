import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsList } from './ContactsList/ContactsList';
import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import { Container, Title } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useLocalStorage('filter', '');

  const onAddContact = newContact => {
    const contactIsAdded = contacts.find(
      ({ name, number }) =>
        name.toLowerCase().trim() === newContact.name.toLowerCase().trim() ||
        number.trim() === newContact.number.trim()
    );

    if (contactIsAdded) {
      toast.error(`${newContact.name} is already in contacts`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setContacts(contacts => [{ ...newContact }, ...contacts]);
    }
  };

  // Відповідає за оновлення стану list by search
  const onSearchFieldChange = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const getContactBySearch = () => {
    const normalizedToLowerCase = filter.toLowerCase();

    const filteredContscts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedToLowerCase)
    );

    return filteredContscts;
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contactItem => contactItem.id !== contactId));
  };

  //OLD---> const { filter } = this.state;
  const contactBySearch = getContactBySearch();

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={onAddContact} />
      <Filter value={filter} onChange={onSearchFieldChange} />
      <ContactsList contacts={contactBySearch} onDelete={deleteContact} />
      <ToastContainer />
    </Container>
  );
}
