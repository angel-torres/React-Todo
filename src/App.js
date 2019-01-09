import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

const todoItems = [
  {todoItem: 'Learn React'},
  {todoItem: 'Eat plenty food'},
  {todoItem: 'Sleep peacefully'},
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoItems: todoItems,

    }
  }

  render() {
    return (
      <div>
        <TodoForm />
      </div>
    );
  }
}

export default App;
