let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string, //Type Anotation
  lastName: string,
): {
  firstName: string,
  lastName?: string,
}{
  return{
    firstName,
    lastName,
  };
}
export function squareOf(x: any){
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString= squareOf('2')

if (squareOfTwoString === null){
  console.log('Conta invalida')
} else {
  console.log(squareOfTwoString * 100);
}

//Quando checo por undefined ou quando a função pode retornar nulo(retorna nulo ou o que eu quero retornar)
// posso retornar null em vez de error