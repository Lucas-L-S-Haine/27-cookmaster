require('dotenv').config();

const express = require('express');

const {
  usersRouter,
  loginRouter,
  recipesRouter,
  imagesRouter,
} = require('./routes');

const app = express();
app.use(express.json());

app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/recipes', recipesRouter);
app.use('/images', imagesRouter);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
