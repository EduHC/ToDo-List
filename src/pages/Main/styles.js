import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 30px auto;

  img {
    width: 500px;
    height: 500px;
    margin: 30px auto;

    align-self: flex-start;
  }
`;

export const Body = styled.div`
  min-width: 700px;

  min-height: 200px;
  max-height: 500px;

  display: flex;
  flex-direction: column;

  background: #eee;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

  border-radius: 5px;
  margin: 6rem 5rem 4rem 2rem;
  padding: 20px;

  h1 {
    font-size: 70px;
    color: #d51519;

    position: absolute;
    left: 10px;
    top: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;

    font-family: 'Poiret One', 'Fredericka the Great', cursive;
    font-optical-sizing: auto;

    text-shadow: 1px 3px 2px rgba(0, 0, 0, 0.2);
    letter-spacing: 6px;

    svg {
      margin-right: 10px;
      margin-left: 30px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    font-size: 18px;

    border-style: none;
    border: 1px solid #6b2269;
    border-radius: 4px;
    padding: 10px 15px;

    background: none;
    box-shadow: inset -1px -1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const List = styled.ul`
  list-style: none;

  margin-top: 30px;
  max-height: 480px;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #b80509;
    border-radius: 10px;
  }

  li {
    font-size: 20px;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #2b3036;

    width: 95%;

    & + li {
      border-top: 1px solid #420741;
    }

    span {
      font-size: 20px;
      font-family: cursive;
    }
  }
`;

export const AddButton = styled.button.attrs({
  type: 'submit'
})`
  width: 40px;

  background: linear-gradient(#6b2269, #571555, #490a46);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 10px;

  border-radius: 6px;
  border: 0;

  transition: 0.4s;

  &:hover {
    opacity: 0.9;
  }
`;

export const DeleteButton = styled.button.attrs({
  type: 'submit'
})`
  width: 23px;
  height: 22px;

  background: linear-gradient(#6b2269, #571555, #490a46);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

  border: none;
  border-radius: 5px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.4s;

  &:hover {
    opacity: 0.9;
  }
`;
