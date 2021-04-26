export abstract class Personagem{ //abstract pois é apenas um contrato para que outras classes herdem dela, essa classe
  //não pode mais ser instanciada diretamente

  //Se a classe tiver atributo ou método abstrato não precisa de corpo nem valor nos métodos ou atibutos
  //são criados nas classes que extendem dessa classe

  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

    atacar(personagem: Personagem): void{
      this.bordao();
      personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void{
      this.vida -= forcaAtaque;
      console.log(`${this.nome} agora tem ${this.vida} de vida...`)
    }

    abstract bordao(): void //Preciso criar o método em ambas as classes
}

//Classe concreta
export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}'

  bordao(): void{
    console.log(this.emoji + 'GUERREEEEEIRRAAAAA AOOO ATAQUEEEEE!')
  }
}

//Classe concreta
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DD}'

  bordao(): void{
    console.log(this.emoji + 'MOOONSTEEER AOOOOOO ATAQUEEEEE!!')
  }
}


const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 100, 1000);

guerreira.atacar(monstro)
guerreira.atacar(monstro)
guerreira.atacar(monstro)
monstro.atacar(guerreira)
monstro.atacar(guerreira)
