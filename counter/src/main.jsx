import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Message from "./Message.jsx"
import Color from "./Color.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Message message="Hello World" />
    <Color />
  </React.StrictMode>,
)
