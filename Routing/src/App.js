import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/home";
import About from "./component/about";
import Info from "./component/info";
import Image from "./component/image";
import Error from "./component/error/error";



function App() {
    return(
        <Router>

            <div>
                <h1>Heyy</h1>
               
               
          <Link to={'/'}>Home </Link>
          <Link to={'/about'}>About </Link>
          <Link to={'/info'}>Info </Link>
          




                <Routes>
                  
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />
                    
                    <Route path="/info" element={<Info />} />
                    
                    <Route path="/image" element={<Image />} />
                    <Route path="*" element={<Error/>}/>
                
                </Routes>





            </div>

        </Router>
    )
}

export default App;