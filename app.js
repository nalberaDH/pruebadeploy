const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 3001;

const routerProducts = require('./src/routes/routerProducts');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.set('view engine','ejs');


app.use(routerProducts);

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));