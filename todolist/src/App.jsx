import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState({description: "", date: ""});
  const [todos, setTodos] = useState([]);

  const inputChanged = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <p>To do list</p>
      <input placeholder='Description' name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder='Date' name="date" value={todo.date} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      <table>
        <tbody>
          {
            todos.map((todo, index) => <tr key={index}><td>{todo.description}</td><td>{todo.date}</td></tr>)
          }
        </tbody>
      </table>
    </>
  )
}

export default App
