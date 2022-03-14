import React from 'react'
import './App.css';
import BarraNavegacion from './componentes/barraNavegacion';
import AboutUs from './componentes/aboutUs/AboutUs';
import Plants from './componentes/Plants/Plants';
import Pots from './componentes/Pots/Pots';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

function App() {
  return (
    <div className='div-principal'>
    <Router>
      <BarraNavegacion/>
        <Routes>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Plants" element={ <Plants /> } />
          <Route path="/Pots" element={<Pots />} />  
        </Routes>
    </Router>

    </div>
  );
}

export default App;
