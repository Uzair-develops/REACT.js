import React, {useState}from 'react'
import './App.css'
function App() {
 
 
 
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('White')
  const [input, setInput] = useState('Uzair')
  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }

  function reset(){
    setCount(count*0)
  }









//  Javascript Code
  return (
    <div className='App' style={{backgroundColor: color}}>
      {/* HTML codes */}

      <input type="text" placeholder='Enter Your Name' onChange={(e)=>setInput(e.target.value)} />
      <h1>Hello, {input}</h1>


      <h1>Result: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      
      <br />
      <br />
     
      <button onClick={()=>setColor('Red')}>Red</button>
      <button onClick={()=>setColor('Blue')}>Blue</button>
      <button onClick={()=>setColor('Green')}>Green</button>
      <button onClick={()=>setColor('Black')}>Black</button>
      <button onClick={()=>setColor('Yellow')}>Yellow</button>
      <button onClick={()=>setColor('Purple')}>Purple</button>
      <button onClick={()=>setColor('Orange')}>Orange</button>
      <button onClick={()=>setColor('Pink')}>Pink</button>
      <button onClick={()=>setColor('Brown')}>Brown</button>
      <button onClick={()=>setColor('Gray')}>Gray</button>
      <button onClick={()=>setColor('Cyan')}>Cyan</button>
      <button onClick={()=>setColor('Magenta')}>Magenta</button>
    </div>
  )
}

export default App