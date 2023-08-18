import styled from '@emotion/styled';

export const FilterWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelSearch = styled.label`
  margin: 0 auto;
  margin-bottom: 30px;
  display: block;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
  color: ${p => p.theme.colors.primary};
`;

export const InputSearch = styled.input`
  margin-top: 10px;
  display: block;
  width: 300px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  background-color: #f6f6f6;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};

  ::placeholder {
    color: #212529;
    opacity: 0.4;
  }

  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;
