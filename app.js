const express = require('express');
const morgan = require('morgan');

const routerProducts = require('./src/routes/routerProducts');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.set('view engine','ejs');


app.use(routerProducts);

app.listen(3001, () => console.log('Servidor escuchando en puerto 3001'));