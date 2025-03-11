import { useState } from 'react'
import './App.css'

function Color() {
    const [color, setColor] = useState("Black");
  return (
    <>
      <p style={{color: color}}>Hello World!</p>
      <button onClick={() => setColor("Red") }>Change color</button>
    </>
  )
}
export default Color