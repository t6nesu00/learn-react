import { useState } from 'react'
import './App.css'
import TodoTable from "./TodoTable"

function App() {
  const [todo, setTodo] = useState({description: "", date: ""});
  const [todos, setTodos] = useState([]);

  const inputChanged = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: "", date: ""});
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <>
      <p>To do list</p>
      <input placeholder='Description' name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder='Date' name="date" value={todo.date} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
