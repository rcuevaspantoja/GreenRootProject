import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';

function AboutUs(){

    return(
        <div className='AboutUs'>
            <Card>
            <CardContent>
                <Typography variant="h5" component="div">

                Green Root
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ¡Green Root ahora saluda a todo Chile!
                </Typography>
                <Typography variant="body2">
                A partir de este año 2022 Green Root tendrá envío en cada una de las casas del país,
                esto es posible gracias a la coolaboración con PedidosYa!     
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}
export default AboutUs

