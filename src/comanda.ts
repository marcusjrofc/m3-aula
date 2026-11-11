// export function emReais(centavos: number): string {
//   return "R$" + (centavos / 100).toFixed(2);
// }

import { error } from "node:console";

// let mesa: number = 7
// let item: string = "x-burguer"
// let aberta: boolean = true
// const precos: number[] = [18, 22]

// function subTotal(preco: number, qtd: number): number {
//   return preco * qtd
// }


export class ItemComanda {
  readonly nome: string;
  readonly precoCentavos: number;
  readonly quantidade: number;

  constructor(nome: string, precoCentavos: number, quantidade: number) {
    if (precoCentavos < 0) {
      throw new Error('Preço negativo em' + nome)
    }
    if (quantidade <= 0) {
      throw new Error('Quantidade precisar ser maior que 0 em ' + nome)
    }
    this.nome = nome;
    this.precoCentavos = precoCentavos;
    this.quantidade = quantidade;

  }
  subTotal(): number {
    return this.precoCentavos * this.quantidade;
  }
}
export class Comanda {
  readonly mesa: number;
  private itens: ItemComanda[] = []
  private aberta: boolean = true;

  constructor(mesa: number) {
    this.mesa = mesa;
  }
  adicionar(item: ItemComanda): boolean {
    if (this.aberta == true) {
      this.itens.push(item)
      return true;
    }
    return false;
  }

  total(): number {
    let soma = 0;
    for (let item = 0; item < this.itens.length; item++) {
      soma = soma + this.itens[item].subTotal()
    }
    return soma;
  }

  fechar(): string {
    this.aberta = false;
    return "Mesa" + this.mesa + "- R$" + (this.total()/100).toFixed(2)
  }
}
