import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  margin: 20px auto 20px auto;

  padding: ${p => p.theme.space[5]}px;

  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;

  overflow: auto;
  background: radial-gradient(circle at center, #000000 20%, #170b0c 80%);
  animation: formWrapper 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;

  @keyframes formWrapper {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelName = styled.label`
  margin-bottom: 30px;
  display: block;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
  color: ${p => p.theme.colors.label};
`;

export const InputName = styled.input`
  margin-top: 10px;
  display: block;
  width: 300px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radius.normal};
  box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
    0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);

  ::placeholder {
    color: ${p => p.theme.colors.placeHolder};
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

export const AddContactButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  font-size: 14px;
  outline: none;
  background: ${p => p.theme.colors.button};
  color: ${p => p.theme.colors.label};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  :before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  :active {
    color: #000;
  }
  :active:after {
    background: transparent;
  }
  :hover:before {
    opacity: 1;
  }
  :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

// margin-bottom: 30px;
// width: 120px;
// font-size: 13px;
// padding: 8px 14px;
// border: ${p => p.theme.borders.none};
// border-radius: ${p => p.theme.radius.normal};
// background-color: ${p => p.theme.colors.button};
// color: ${p => p.theme.colors.label};
// cursor: pointer;
// box-shadow: 0px 0.8px 2px rgba(0, 0, 0, 0.032),
//   0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08);

// :hover {
//   color: #9398a3;
//   background-color: #fff;
//   box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
// }
