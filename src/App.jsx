import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({name: "", age: ""})
  
  const UpdatedInput = (e) => {
    setPerson({...person, [e.target.name]: [e.target.value]})
  }

  const checkAge = (age) => {
     person.age < 18 ? alert("You are too young") : alert("Hello " + person.name)
  }

  return (
    <>
      <p>This is age checking</p>
      <input placeholder='name' name="name" value={person.name} onChange={UpdatedInput} />
      <input placeholder='age' name="age" value={person.age} onChange={UpdatedInput} />
      <button onClick={checkAge}>Check age</button>
    </>
  )
}

export default App
