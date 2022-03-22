import React from 'react'
import './App.css';
import BarraNavegacion from './componentes/barraNavegacion';
import Home from './Home';
import AboutUs from './componentes/aboutUs/AboutUs';
import Inventario from './componentes/Inventario/Inventario';
import Catalogo from './componentes/Catalogo/Catalogo';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

function App() {
  return (
    <div className='div-principal'>
      <Router>
        <BarraNavegacion/>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Inventario" element={ <Inventario /> } />
            <Route path="/Catalogo" element={<Catalogo />} />  
          </Routes>
      </Router>
    </div>
  );
}

export default App;
