import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todoSlice' 
import '../App.css'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="frm">
      <input
       
        type="text"
       
        // className="bg-red-800 rounded border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        // className="w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        className='inp'
        placeholder="Enter a Task you want to do..."
       
        value={input}
      
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        // className="text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg"
        className='btn'
      >
        Add...
      </button>
    </form>
  )
}

export default AddTodo