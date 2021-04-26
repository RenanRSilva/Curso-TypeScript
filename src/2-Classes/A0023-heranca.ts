export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

    getIdade(): number {
      return this.idade;
    }

    getCpf(): string {
      return this.cpf;
    }

    getNomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome;
    }
  }

  export class Aluno extends Pessoa { // Utilizamos extends para herança
    getNomeCompleto(): string{
      return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome;//Polimorfismo
    }
  }
  export class Cliente extends Pessoa {
    getNomeCompleto(): string {
      return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;//Polimorfismo
    }
  }


  const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
  const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00');
  const cliente = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00');

  console.log(aluno.getNomeCompleto())
  console.log(pessoa.getNomeCompleto())
  console.log(cliente.getNomeCompleto())