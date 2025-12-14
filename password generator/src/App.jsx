import React, { useState, useCallback, useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [sample, SetSample] = useState(7)

  const [length, SetLength] = useState(8)
  
  const [numberAllowed, SetNumberAllowed] = useState(false)
  
  const [charAllowed, setCharAllowed] = useState(false)
  
  const [password, SetPassword] = useState("")
 




 //useRef hook
 const passwordRef = useRef(null);







//useCallback hook
const PasswordGenerator = useCallback(() => {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*()_+{}[]:;'<>,.?/";

  // build password into a local variable (don't reassign state variable directly)
  let newPassword = "";
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * str.length);
    newPassword += str.charAt(idx);
  }

  SetPassword(newPassword);
  console.log(newPassword);

}, [length, numberAllowed, charAllowed]);






//optional chaining operator (?.)

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 99999);
  window.navigator,clipboard.writeText(password)
}, [password])










//useEffect hook
useEffect(() => {
  PasswordGenerator();
}, [length, numberAllowed, charAllowed, PasswordGenerator]);






  return (
    <div>
     
     <div className='a'>
     <h1>--Password Generator--</h1>

      <input type="text"
        value={password}
        ref={passwordRef}
        readOnly
        className="password-input"
      />
      <Button variant="primary" onClick={() => {
        if (passwordRef.current) {
          navigator.clipboard?.writeText(passwordRef.current.value);
        }
      }}>Copy</Button>
      <br />
      <br />
      <div className='y'>
      <input style={{color:"black"}} type="range" min={4} max={100} value={length} onChange={(e) => SetLength(Number(e.target.value))} />
      </div>
      <label htmlFor="Length">Length: {length}</label>
      <div>
        <label>
          <input type="checkbox" checked={numberAllowed} onChange={(e) => SetNumberAllowed(e.target.checked)} /> Numbers
        </label>
        <label style={{marginLeft:8}}>
          <input type="checkbox" checked={charAllowed} onChange={(e) => setCharAllowed(e.target.checked)} /> Symbols
        </label>
      </div>
      </div>    
    </div>
  )
}

export default App