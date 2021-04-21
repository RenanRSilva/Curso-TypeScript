//Tuple
const dadosCliente1: [number, string] = [1, 'Luiz']
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda']
const dadosCliente3: [number, string, string?] = [1, 'Luiz', 'Miranda']
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda', 'Renan']

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos;'
dadosCliente1.pop();


console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)

//readonly array
const array1: readonly string[] = ['Renan', 'Silva'];
