require('dotenv').config();

const express = require('express');
// const multer = require('multer');
const path = require('path');

const port = 5000;

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log(`console.log para testes. PORT: ${port}.`));

console.log(path.join(__dirname, '../..', 'uploads'));
