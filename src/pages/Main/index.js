import React, { Component } from 'react';
import { FaPlus, FaRegListAlt, FaMinus } from 'react-icons/fa';

import { Container, Form, AddButton, List, Body, DeleteButton } from './styles';
import image from '../../images/background.svg';

export default class Main extends Component {
  state = {
    newTodo: '',
    ToDos: []
  };

  // Carregar os dados no LocalStorage
  componentDidMount() {
    const todos = localStorage.getItem('ToDos');

    if (todos) {
      this.setState({ ToDos: JSON.parse(todos) });
    }
  }

  // salvar os dados no localStorage
  componentDidUpdate(_, prevState) {
    const { ToDos } = this.state;

    if (prevState.ToDos !== ToDos) {
      localStorage.setItem('ToDos', JSON.stringify(ToDos));
    }
  }

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { newTodo, ToDos } = this.state;

    if (newTodo !== '') {
      this.setState({
        ToDos: [...ToDos, newTodo],
        newTodo: ''
      });
    }
  };

  handleDelete(key) {
    const { ToDos } = this.state;

    const updatedArray = ToDos.filter(item => {
      return item !== key;
    });

    this.setState({ ToDos: updatedArray });
  }

  render() {
    const { newTodo, ToDos } = this.state;

    return (
      <Container>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Poiret+One&display=swap"
            rel="stylesheet"
          />
        </head>

        <Body>
          <h1>
            <FaRegListAlt size={40} color="#B80509" />
            Lista de Afazeres
          </h1>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Adicionar afazer"
              value={newTodo}
              onChange={this.handleInputChange}
            />

            <AddButton>
              <FaPlus color="#fff" size={15} />
            </AddButton>
          </Form>
          <List>
            {ToDos.map(item => (
              <li key={item.id}>
                <DeleteButton onClick={() => this.handleDelete(item)}>
                  <FaMinus size={10} color="#fff" />
                </DeleteButton>
                <span>{item}</span>
              </li>
            ))}
          </List>
        </Body>
        <img src={image} alt="Imagem" />
      </Container>
    );
  }
}
