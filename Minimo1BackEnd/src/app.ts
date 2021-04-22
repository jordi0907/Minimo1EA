//config de la aplicacion/servidor

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from'body-parser';

import coursesRoutes from './routes/courses.routes';



//inicializations
const app = express();

// settings
app.set('port', process.env.PORT || 3001);


// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());


//rutas
/*  app.get('/', (req, res) => {
  return res.status(400).send(`The API is at http://localhost:${app.get('port')}`);
});  */

/* app.use(coursesRoutes); */

export default app;
