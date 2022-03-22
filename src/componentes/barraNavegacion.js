import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ParkIcon from '@mui/icons-material/Park';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function BarraNavegacion(){

  return (
    <AppBar style={{ background: '#426442' }} position="sticky" >
      <Toolbar>
        <ParkIcon style={{ fontSize: 40 }}/>
        <Typography variant="h4" > BilletesChile </Typography>
          <div  className='BarraNavegacion'>
            <Button variant="text" component={Link} to="/" size="large" color="inherit"> Inicio </Button>

            <Button variant="text" component={Link} to="/Catalogo" size="large" color="inherit"> Catálogo </Button>

            <Button variant="text" component={Link} to="/Inventario" size="large" color="inherit"> Inventario </Button>
          </div>
      </Toolbar>
    </AppBar>
  )
}

export default BarraNavegacion
