//Declaration Merging
interface Animal {
  nome: string;
}

interface Animal {
  readonly sobrenome: string;
}

const animal: Animal = {
  nome: 'Dog',
  sobrenome: 'AuAu',
};