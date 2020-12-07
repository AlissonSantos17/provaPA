const { Router } = require('express');
const FuncionarioController = require('../controllers/Funcionario.controller');

funcionarioController = Router();

funcionarioController.post('/maiorsalario', FuncionarioController.getMaiorSalario);

module.exports = funcionarioController;