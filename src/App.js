import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'

const data = [
  {todo: 'Learn React'},
  {todo: 'Eat plenty food'},
  {todo: 'Sleep peacefully'},
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoItems: data,
      inputText: '',
      todo: '',
      trash: []
    }
  }

  addNewItem = e => {
    e.preventDefault();
    this.setState({
      todoItems: [...this.state.todoItems, {todo: this.state.inputText}],
      inputText: ''
    })
  }

  handleChanges = (e) => {
    this.setState({inputText: e.target.value});
  }

  trash = (e) => {
    this.setState({
      trash: [...this.state.trash, {trashItem: e.target}] });
    console.log(this.state.trash)
  }

  
  render() {
    return (
      <div>
        <TodoList 
        todoItemList={this.state.todoItems}
        trash={this.trash} />
        <TodoForm 
          addNewItem={this.addNewItem}
          inputText={this.state.inputText}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
