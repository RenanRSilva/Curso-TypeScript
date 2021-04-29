//uma função que recebe o target que é a classe que estamos decorando


function inverteNomeCor<T extends new (...args: any[]) => any>(target: T): T{ //Com o decorator posso intervir no meio da classe,
                                                                          //é uma função que é chamada no meio da classe
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);

    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('')
    }
  };
}

@inverteNomeCor
export class Animal {
  constructor(public name: string,  public cor: string) {}
}


const animal = new Animal('Luiz', 'Roxo');
console.log(animal);

