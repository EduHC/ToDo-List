import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 6.5fr 4fr;
  grid-template-areas: '. body background-style';

  height: 650px;

  margin: 30px auto;
`;

export const Body = styled.div`
  grid-area: body;
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;

  border-radius: 8px;

  background: #f6f6f6;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 1px 2px 8px rgba(0, 0, 0, 0.5);
`;

export const BackgroundStyle = styled.div`
  grid-area: background-style;

  width: 100%;
  heigth: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 350px;
    height: 350px;
    margin-top: 30px;
  }

  h1 {
    font-size: 48px;
    background: -webkit-linear-gradient(left, rgba(73, 73, 73, 0.8), #000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-transform: rotate(10deg);
  }

  button {
    width: 85px;
    height: 35px;

    border-style: none;
    border-radius: 8px;

    background: #3c6e71;
    color: #f0f0f0;

    box-shadow: 1px 2px 2px rgba(73, 73, 73, 0.5);

    &:active {
      width: 83px;
      height: 33px;
      background: rgba(60, 110, 113, 0.8);
    }
  }
`;

export const InputField = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 20px;

  input {
    width: 550px;
    height: 45px;
    font-size: 14px;

    border-style: none;
    border: 1px solid #636363;
    border-radius: 8px;
    padding: 10px 15px;

    background: white;
  }

  button {
    width: 85px;
    height: 35px;

    border-style: none;
    border-radius: 8px;

    background: #3c6e71;
    color: #f0f0f0;

    box-shadow: 1px 2px 2px rgba(73, 73, 73, 0.5);

    &:active {
      width: 83px;
      height: 33px;
      background: rgba(60, 110, 113, 0.8);
    }
  }
`;

export const List = styled.ul`
  list-style: none;

  margin-top: 20px;
  height: 400px;
  width: 630px;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #504547;
    border-radius: 10px;
  }

  li {
    padding: 15px 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 95%;

    & + li {
      border-top: 1px solid #504547;
      border-radius: 2px;
    }

    span {
      font-size: 20px;
      font-family: cursive;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 30px;
      transition: 0.5s;
    }

    div {
      height: 100%;
      width: 70%;

      display: flex;
      align-items: center;
    }
  }
`;

export const NoTodoDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  color: rgba(73, 73, 73, 0.6);

  img {
    height: 100px;
    width: 100px;
    margin-bottom: 30px;
  }
`;

export const Statistics = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  text {
    font-size: 24px;
    color: #494949;
  }
`;

export const ConfirmButton = styled.button`
  width: 30px;
  height: 30px;

  button-style: none;
  border-style: none;

  background: none;

  margin-right: 15px;

  transition: 0.5s;

  &:hover {
    width: 35px;
    height: 35px;
  }
`;

export const CancelButton = styled.button`
  width: 30px;
  height: 30px;

  button-style: none;
  border-style: none;

  background: none;

  transition: 0.5s;

  &:hover {
    width: 35px;
    height: 35px;
  }
`;
