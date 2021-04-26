export class Empresa {
  public readonly nome: string;//Pulbic pode ser acessado em qualquer lugar
  protected readonly colaboradoes: Colaborador[] = []; // Protected pode ser acessado na classe em que foi criado e também nas subclasses
  private readonly cnpj: string;//Private só pode ser acessado na classe em que foi criado


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


export class Udemy extends Empresa{
  constructor() {
    super('Udemy', '11.111.111/0001-11')
  }

  popColaborador(): Colaborador | null{
    const colaborador = this.colaboradoes.pop();
    if (colaborador) return colaborador;
    return null;
  }
}




export class Colaborador{ //Criando uma classe voce tambem está criando um tipo
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    ) {}
}

const empresa1 =  new Udemy();
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
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido)
console.log(empresa1)
