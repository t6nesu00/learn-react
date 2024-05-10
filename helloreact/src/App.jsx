import { useState } from "react"
import './App.css'
function App() { 
  const [person, setPerson] = useState({firstname: '', secondname: '', age: ''})
  
  const inputChanged = (e) => {
    setPerson({...person, [e.target.name]: e.target.value});
  }

  const formSubmitted = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h1>Welcome to my site {person.firstname} {person.secondname}</h1>
      <form onSubmit={formSubmitted}>
        <input placeholder="first name" name="firstname" value={person.firstname} onChange={inputChanged}/>
        <input placeholder="last name" name="lastname" value={person.lastname} onChange={inputChanged}/>
        <input placeholder="age" name="age" value={person.age} onChange={inputChanged}/>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
export default App
