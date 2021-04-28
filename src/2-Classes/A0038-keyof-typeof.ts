//A partir de um valor posso pegar o tipo daquele objeto
//A partir do tipo posso pegar as chaves de um objeto
type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: ' blue',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj){
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj))
console.log(traduzirCor('verde', coresObj))