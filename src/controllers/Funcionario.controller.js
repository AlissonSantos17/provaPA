const Funcionario = require('../class/Funcionario');

exports.getMaiorSalario = async (req, res) => {
  let lista = []
  for(let i = 0; i < req.body.length; i++) {
    const { matricula, nome, salario } = req.body[i];

    const funcionario = new Funcionario(
      matricula,
      nome,
      salario
    );

    lista.push(funcionario)
  }
  const maiorSalario = lista.reduce((acumulador, valor) => {
    if(acumulador.salario > valor.salario) return acumulador
    return valor
  })
  return res.status(200).json(maiorSalario)
}