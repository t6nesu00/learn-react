import { useState } from 'react'
import './App.css'

function Message(props) {
  return (
    <>
      {
        props.message.length <= 10
        ? <p>{props.message}</p>
        : <p>Too long</p>
      }
    </>
  )
}
export default Message