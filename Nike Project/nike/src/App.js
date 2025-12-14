import React from 'react'
import './App.css'
import Home from './Comp/Home'
import Launch from './Comp/Launch'
import Error from './Comp/nope'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useParams} from 'react-router-dom';

function App() {
  return (

  <Router>
    <nav style={{ background: '#111', padding: '12px 16px' }}>
    
       <Link to='/' style={{ color: '#fff', fontWeight: 600 }}>Home</Link>

       <Link to='/launch' style={{ color: '#fff',  fontWeight: 600 }}> Launch</Link>
    
    </nav>



       <Routes>
          <Route path='/' element={<Home/>} />

      <Route path='/launch' element={<Launch />}>
      
        <Route index element={<LaunchIndex />} />
        <Route path=':slug' element={<LaunchShoe />} />

      </Route>

                <Route path='*' element={<Error />} />
       </Routes>

    </Router>
  )
}

export default App

function LaunchIndex() {
  return (
  <ul id='mp'>
    {Object.entries(shoes).map(([slug, {name, img}]) => 
    <li key={slug}>
        <Link to={`/launch/${slug}`}>
      <h2>{name}</h2>
      <img src={img} alt={name} width={500}  />
        </Link>
    </li>
    )}
  </ul>
  )
}

function LaunchShoe() {

    const { slug } = useParams();   
    const shoe = shoes[slug];

    if (!shoe) {
        <h2>Shoe not found!</h2>
    }

    const { name, img } = shoe;
  return (
    <div>
        <h1>{name}</h1>
        <img src={img} alt={name} />
    </div>
  )
}








    const shoes = {
  "Zion-4": {
    name: "ZION 4",
    img:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/45e4ee80-b338-4df9-8121-938b157106b8/JORDAN+ZION+4.png"
  },

  "Nike-gato-lv8": {
    name: "NIKE GATO LV8",
    img:
        "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/e4eecddb-73f5-4744-ad1d-49cf030e43a7/NIKE+GATO+LV8.png " },
 
  "Air-vapormax-plus": {
    name: "AIR VAPORMAX PLUS",
    img:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/z7azavhnfzkpyjz3qquq/AIR+VAPORMAX+PLUS.png"
  }
};