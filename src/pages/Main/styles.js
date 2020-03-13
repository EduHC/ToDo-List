import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  max-width: 1000px;
  min-height: 450px;
  border-radius: 15px;
  padding: 30px;
  margin: 80px auto;
  justify-content: center;
  flex-direction: row;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

  h1 {
    font-size: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    margin-left: 150px;
    color: #420741;
    font-family: 'Poiret One', 'Fredericka the Great', cursive;
    font-optical-sizing: auto;

    svg {
      margin-right: 10px;
      margin-left: 30px;
    }
  }
`;

export const Body = styled.div`
  max-width: 850px;
  background: #eee;
  min-height: 150px;
  border-radius: 15px;
  padding: 30px;
  margin: 30px auto;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
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
  border: none;
  border-radius: 5px;
  background: #420741;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
