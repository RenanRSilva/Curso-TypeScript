export class Empresa {
  public readonly nome: string;
  private readonly colaboradoes: Colaborador[] = [];
  protected readonly cnpj: string;


  constructor(nome: string, cnpj: string){
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradoes.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradoes){
      console.log(colaborador);
    }
  }
}

export class Colaborador{ //Criando uma classe voce tambem está criando um tipo
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    ) {}
}

const empresa1 =  new Empresa('Facebook', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');


empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3)
empresa1.adicionaColaborador({ //Classes criam objetos
  nome: 'Luiz',
  sobrenome: 'Miranda',
});
console.log(Empresa)

console.log(empresa1);
console.log(empresa1.nome);