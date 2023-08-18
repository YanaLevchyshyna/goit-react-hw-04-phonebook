import styled from '@emotion/styled';

export const ContactsListWrapp = styled.div`
  margin: 20px auto 20px auto;

  padding: ${p => p.theme.space[5]}px;

  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  gap: 15px;
  color: ${p => p.theme.colors.text};
`;

export const ContactsListBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

  & > svg {
    fill: #a0a8ba;

    :hover {
      fill: #67686b;
    }
  }
`;
