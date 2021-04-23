type Idade = number;
type Pessoa = { //Todo objeto que for do tipo pessoa terá essas chaves
  nome: string
  idade: Idade; //Podemos usar um tipo dentro do outro
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa1: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa{
  return {...pessoa, corPreferida: cor};
}

console.log(setCorPreferida(pessoa1, 'Azul'));