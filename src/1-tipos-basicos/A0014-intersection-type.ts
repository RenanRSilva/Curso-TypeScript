type TemNome = { nome: string};
type TemSobrenome = { sobrenome: string};
type TemIdade =  {idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; //Combinação dos 3 tipos

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC; //Elemento em comum nos conjuntos

const pessoa2: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(pessoa2);

