export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf //Chamo o setter aqui
  }

  //get e set funcionam como atributos da classe
    set cpf(cpf: string) {
      console.log('SETTER CHAMADO')
      this._cpf = cpf;
    }

    get cpf(): string{
      console.log('GETTER CHAMADO')
      return this._cpf.replace(/\D/g, '');
    }
  }

  const pessoa =  new Pessoa('Luiz', 'Miranda', 30, '132.452.345-00')
  pessoa.cpf = '123.456.798-99'; //Acessamos o setter quando utilizamos o sinal de  =
  console.log(pessoa.cpf)//Obtendo o valor e chamando o getter