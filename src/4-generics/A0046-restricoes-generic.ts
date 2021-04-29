type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K] //Usando extends para restringir o K como chave de O
         //           K é no máximo uma chave de O

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animals = {
  cor: 'Rosa',
  vacina: ['Vacina 1', 'Vacina 2'],
  idade: 10,
};

const vacinas = obterChave(animals, 'vacina');
const cor = obterChave(animals, 'cor');

console.log(vacinas, cor, obterChave(animals, 'idade'))

