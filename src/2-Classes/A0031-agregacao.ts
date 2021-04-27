//uma classe precisa de outra classe mas ambas podem viver separadamente

export class CarrinhoDeCompras{
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto)
    }
  }

  quantidadeProdutos(): number{
    return this.produtos.length;
  }
  valorTotal(): number{
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }

}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}length

const produto1 = new Produto('Camiseta', 49.9)
const produto2 = new Produto('Caneca', 1.9)
const produto3 = new Produto('Caneta', 0.9)

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);