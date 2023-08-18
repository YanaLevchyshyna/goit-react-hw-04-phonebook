import PropTypes from 'prop-types';
import { BsXCircleFill } from 'react-icons/bs';
import {
  ContactsListWrapp,
  List,
  ListItem,
  ContactsListBtn,
} from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ContactsListWrapp>
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <ListItem key={id}>
              <span>{name}: </span>
              <span>{number}</span>
              <ContactsListBtn type="button" onClick={() => onDelete(id)}>
                <BsXCircleFill size="16" />
              </ContactsListBtn>
            </ListItem>
          );
        })}
      </List>
    </ContactsListWrapp>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
