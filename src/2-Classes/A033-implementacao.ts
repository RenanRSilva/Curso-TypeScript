type TipoPessoa = {
   nome: string;
   sobrenome: string;
   nomeCompleto(): string;
}

export class Pessoa implements TipoPessoa { //Quando utilizamos types utilizar a palavra implements ao invés de extends
  constructor(  public nome: string,  public sobrenome: string){}

   nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda')
console.log(pessoa.nomeCompleto)