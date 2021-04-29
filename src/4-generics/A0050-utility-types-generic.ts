//Record

const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string,
  sobrenome?: string;
  idade?: number;
};


//Required
type Pessoaqrequired =  Required<PessoaProtocol>;//Record transforma tudo que é opcional em não opcional

//partial
type PessoaPartial = Partial<Pessoaqrequired>//Retorna tudo que era requirido em opcional

//Readonly
type PessoaReadonly = Readonly<Pessoaqrequired>; //Transforma tudo em readonly

//pick
type PessoaPick = Pick<Pessoaqrequired, 'nome' | 'sobrenome'>//Escolha da chave required apénas nome e sobrenome


const objeto2: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: '30',
};
console.log(objeto2);


//Extract  e Exclude
type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'
type TipoExclude =  Exclude<ABC, CDE>; // Só sobra 'A' e 'B'
type TipoExtract =  Extract<ABC, CDE> //Sóbra C

//
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
}; 1

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> &{
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'afdssjdakkfnkdsfnsd',
  nome: 'Luiz',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi{
  const {_id, ...accountData} = accountMongo;
  return {...accountData, id: _id};
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi)

//module mode
export  default 1;