const { Router } = require('express');
const express = require('express');

const funcionarioRouter = require('./funcionarios.routes');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js!',
    version: '1.0.0',
  });
});

routes.use('/funcionarios', funcionarioRouter);

module.exports = routes;