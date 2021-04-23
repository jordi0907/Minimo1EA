//config de la aplicacion/servidor

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from'body-parser';

import personasRoutes from './routes/persona.routes';



//inicializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);


// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());



 app.use('/persona', personasRoutes ); 

export default app;
