import React from 'react';
import "./styles.css";
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Header from './components/TodoComponents/HeaderComponent';


const data = [
  {
    todo: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    todo: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoItems: [],
      inputText: '',
      todo: '',
    }
  }

  addNewItem = e => {
    e.preventDefault();
    this.setState({
      todoItems: [...this.state.todoItems, 
        {todo: this.state.inputText,
        id: Date.now(),
        completed: false}],
      inputText: ''
    })
  }

  handleChanges = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  removeSelected = (e) => {
    e.preventDefault();
    this.setState({
      todoItems: this.state.todoItems.filter( todo => todo.completed === false) 
    });
  }

  toggleCompleted = selectedItemId => {
    this.setState({
      todoItems: this.state.todoItems.map( todo => {
        if (selectedItemId !== todo.id) {
          return todo
        } else {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      })
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <TodoList 
        todoItemList={this.state.todoItems}
        toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
          addNewItem={this.addNewItem}
          inputText={this.state.inputText}
          handleChanges={this.handleChanges}
          removeSelected={this.removeSelected}
        />
      </div>
    );
  }
}

export default App;
