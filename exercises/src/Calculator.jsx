import { useState } from 'react'
import './App.css'

function Calculator() {
  const [number, setNumber] = useState({firstNumber: "", secondNumber: ""})
  const [result, setResult] = useState(0)
  
  const UpdatedInput = (e) => {
    setNumber({...number, [e.target.name]: [e.target.value]})
  }

  const DoAdd = (firstNumber, secondNumber) => {
  setResult(Number(number.firstNumber) + Number(number.secondNumber))
  }

  const DoSub = (firstNumber, secondNumber) => {
    setResult(Number(number.firstNumber) - Number(number.secondNumber))
  }

  return (
    <>
      <p>Calculator</p>
      <p>Result: {result}</p>
      <input name="firstNumber" value={number.firstNumber} onChange={UpdatedInput}/>
      <input name="secondNumber" value={number.secondNumber} onChange={UpdatedInput}/>
      <button onClick={DoAdd}>+</button>
      <button onClick={DoSub}>-</button>
    </>
  )
}

export default Calculator