//Ser explicito no retorno das funções e métodos
//Void é quando uma função ou método não retrona nada
function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void{
    console.log(this.nome + ' ' + this.sobrenome)
  }
};

semRetorno('Luiz', 'Renan')
pessoa.exibirNome();

export { pessoa };