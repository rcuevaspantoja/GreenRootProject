import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import billete from './componentes/aboutUs/1000-anverso.jpg'

function Home(){

    var emoji = require('node-emoji')

    return(
        <div className='AboutUsdiv'>
            <Card>
            <CardMedia 
                    className='imagen-billete-home'
                    component="img"
                    height="300"
                    image= { billete }
                    alt="planta.img"
            />
            </Card>
            <Card style={{backgroundColor: "beige"}}>
            <CardContent>
                <Typography variant="h5" component="div">
                BilletesChile {emoji.get('💵')}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    BilletesChile ahora saluda a todo Chile!
                </Typography>
                <Typography variant="body2">
                BilletesChile nace como una plataforma donde las personas podrán almacenar su colección
                de billetes nacionales de manera digital. Haciendoles más fácil la tarea poder revisar su 
                colección en todo momento y estar al tanto de ella sin tener que andar con la colección misma   
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}
export default Home

