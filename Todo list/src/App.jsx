import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='hh'>Todo List to make your day way much easier</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App