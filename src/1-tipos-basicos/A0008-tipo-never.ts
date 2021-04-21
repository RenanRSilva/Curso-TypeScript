//Never nuca retorna nada
function criaErro(): never{
  throw new Error('Erro qualquer');
}

criaErro();