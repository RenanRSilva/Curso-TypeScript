/* eslint-disasble */
//Tipos básicos (aqui ocorre a inferência de tipos)
let nome: string = 'Luiz';// Qualquer tipo de string
let idade: number = 30;
let adulto: boolean = true;//True ou false
let simbolo: symbol = Symbol('qualquer-symbol')//symbol
//let big: bigint = 10n;

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];

//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Luiz'
};


//Funções
function soma(x: number, y: number): number{
  return x + y;
}
const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y
