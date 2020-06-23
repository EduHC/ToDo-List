import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 30px auto;

  h1 {
    font-size: 40px;
    color: #420741;

    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;

    font-family: 'Poiret One', 'Fredericka the Great', cursive;
    font-optical-sizing: auto;

    svg {
      margin-right: 10px;
      margin-left: 30px;
    }
  }
`;

export const Body = styled.div`
  max-width: 900px;
  min-width: 700px;
  min-height: 400px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  background: #eee;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  border-radius: 15px;
  margin: 30px auto;
  padding: 30px;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #420741;
    padding: 10px 15px;
    border-radius: 10px;
    font-size: 18px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  width: 40px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #420741;
  border-radius: 8px;
  border: 0;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    font-size: 20px;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    & + li {
      border-top: 1px solid #420741;
    }

    span {
      font-size: 20px;
      font-family: cursive;
    }
  }
`;

export const Button = styled.button.attrs({
  type: 'submit'
})`
  width: 23px;
  height: 22px;

  background: #420741;

  border: none;
  border-radius: 5px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
