const { Router } = require('express');
const FuncionarioController = require('../controllers/Funcionario.controller');

funcionarioController = Router();

funcionarioController.get('/maiorsalario', FuncionarioController.getMaiorSalario);

module.exports = funcionarioController;