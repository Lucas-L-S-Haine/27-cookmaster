require('dotenv').config();

const express = require('express');
const path = require('path');
const errorMiddleware = require('./middlewares/errorHandler');

const {
  usersRouter,
  loginRouter,
  recipesRouter,
  imagesRouter,
} = require('./routes');

const app = express();
app.use(express.json());

usersRouter(app);
loginRouter(app);
recipesRouter(app);
app.use('/images', imagesRouter);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use(express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorMiddleware);

module.exports = app;
