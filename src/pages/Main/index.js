import React, { useRef, useState, useEffect } from 'react';

import {
  Container,
  InputField,
  List,
  Body,
  BackgroundStyle,
  NoTodoDiv,
  Statistics,
  ConfirmButton,
  CancelButton
} from './styles';

import backgroundImage from '../../assets/background.svg';
import happyImage from '../../assets/smile.svg';
import confirmIcon from '../../assets/confirm.svg';
import deleteIcon from '../../assets/delete.svg';

export default function Main() {
  const [toDos, setToDos] = useState([]);
  const [newTodo, setNewToDo] = useState('');
  const [concluded, setConcluded] = useState(0);
  const [canceled, setCanceled] = useState(0);
  const oldToDos = useRef(toDos);
  const oldConcluded = useRef(concluded);
  const oldCanceled = useRef(canceled);

  // Carregar os dados no LocalStorage
  useEffect(() => {
    const todos = localStorage.getItem('ToDos');
    const totalConcluded = localStorage.getItem('TotalConcluded');
    const totalCanceled = localStorage.getItem('TotalCanceled');

    if (todos) setToDos(JSON.parse(todos));
    if (totalConcluded) setConcluded(Number(totalConcluded));
    if (totalCanceled) setCanceled(Number(totalCanceled));
  }, []);

  // salvar os dados no localStorage
  useEffect(() => {
    if (oldToDos !== toDos)
      localStorage.setItem('ToDos', JSON.stringify(toDos));

    if (oldConcluded !== concluded)
      localStorage.setItem('TotalConcluded', JSON.stringify(concluded));

    if (oldCanceled !== canceled)
      localStorage.setItem('TotalCanceled', JSON.stringify(canceled));
  }, [toDos]);

  function handleInputChange(e) {
    setNewToDo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (newTodo !== '') {
      const arrayOfTodos = [...toDos, newTodo];

      setToDos(arrayOfTodos);
      setNewToDo('');
    }
  }

  function handleDelete(itemList, action) {
    const updatedArrayOfTodos = toDos.filter(item => {
      return item !== itemList;
    });

    if (action === 'concluded') {
      setConcluded(concluded + 1);
    } else {
      setCanceled(canceled + 1);
    }

    setToDos(updatedArrayOfTodos);
  }

  function resetNumbers() {
    setCanceled(0);
    setConcluded(0);

    localStorage.setItem('TotalConcluded', JSON.stringify(0));
    localStorage.setItem('TotalCanceled', JSON.stringify(0));
  }

  return (
    <Container>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Poiret+One&display=swap"
          rel="stylesheet"
        />
      </head>

      <Body>
        <InputField onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu compromisso..."
            value={newTodo}
            onChange={handleInputChange}
          />
          <button type="submit">
            <text>Adicionar</text>
          </button>
        </InputField>
        {toDos.length < 1 ? (
          <NoTodoDiv>
            <img src={happyImage} alt="Happy face" />
            <text>Nenhum afazer listado</text>
          </NoTodoDiv>
        ) : (
          <List>
            {toDos.map(item => (
              <li key={item.id}>
                <div>
                  <ConfirmButton
                    onClick={() => handleDelete(item, 'concluded')}
                  >
                    <img src={confirmIcon} alt="Confirmation Icon" />
                  </ConfirmButton>
                  <span>{item}</span>
                </div>

                <CancelButton onClick={() => handleDelete(item, 'canceled')}>
                  <img src={deleteIcon} alt="Delete Icon" />
                </CancelButton>
              </li>
            ))}
          </List>
        )}
      </Body>
      <BackgroundStyle>
        <h1>Get Things Done!</h1>
        <img src={backgroundImage} alt="background-style" />
        <Statistics>
          <text>Concluído: {concluded}</text>
          <text>Cancelado: {canceled}</text>
        </Statistics>
        <button type="submit" onClick={resetNumbers}>
          <text>Recomeçar!</text>
        </button>
      </BackgroundStyle>
    </Container>
  );
}
