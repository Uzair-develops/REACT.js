// import React from 'react'
// import './App.css'
// import { useState } from 'react'
// import weather from './weather.jsx'
// import axios from 'axios'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
// let home = ()=>{

// const [cityName, setCityName] = useState('');
// const [data, setData] = useState([]);
// }
// function App() {

      

//   return (
//     <div>
//       <div className="sun" ></div>




        

//         <div className='box'>

//           <h1>Check Weather!!!</h1>

//           <form onSubmit={weather}>
//           {/* <label htmlFor="City" className='a'> Enter City:</label>
//           <input type="text"
//            name="city" 
//            required 
//            placeholder='Enter City Name'
//            /> */}
//             <InputGroup className="mb-3">
//         <InputGroup.Text id="inputGroup-sizing-default">
//           City
//         </InputGroup.Text>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//         />
//       </InputGroup>
//           <Button variant="primary">Get Weather</Button>
//           </form>
    
//         </div>
       
        
        



//     </div>
//   )
// }

//    export default App

import './App.css';
import Home from "./component/home/index.jsx";
// import about from "./components/about";

function App() {
  return (
    <div >
      <div className="sun" ></div>
      <Home />
       {/* <About />  */}
       

    </div>
  );
}

export default App;