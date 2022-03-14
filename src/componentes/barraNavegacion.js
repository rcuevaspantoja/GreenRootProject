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
        <Typography variant="h4" > Green Root </Typography>
          <div  className='BarraNavegacion'>
            <Button variant="text" component={Link} to="/" size="large" color="inherit"> Home </Button>

            <Button variant="text" component={Link} to="/AboutUs" size="large" color="inherit"> About Us </Button>

            <Button variant="text" component={Link} to="/Plants" size="large" color="inherit"> Plants </Button>

            <Button variant="text" component={Link} to="/Pots" size="large" color="inherit"> Pots </Button>
          </div>
      </Toolbar>
    </AppBar>
  )
}

export default BarraNavegacion
