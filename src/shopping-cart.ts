type CartItem = { name: string; price: number };
type StatusCart = 'Open' | 'Closed';

class ShoppingCart {
  private _items: CartItem[] = [];
  private _orderStatus: StatusCart = 'Open';

  AddItem(product: CartItem): void {
    this._items.push(product);
  }

  RemoveItem(indexItem: number): void {
    const itemRemovido = this._items.splice(indexItem, 1);
    console.log('Item removido com sucesso', itemRemovido);
  }

  totValue(): number {
    const totvalue = this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
    return +totvalue;
  }

  checkout() {
    if (this.isEmpty()) {
      console.log('Carrinho vazio');
      return;
    }

    this.orderStatus = 'Closed';
    this.sendMessage('Seu pedido foi recebido');
    this.clearCart();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clearCart(): void {
    this._items.length = 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  get items(): readonly CartItem[] {
    return this._items;
  }

  get orderStatus(): StatusCart {
    return this._orderStatus;
  }
}

const cart = new ShoppingCart();
cart.AddItem({ name: 'NomeItem1', price: 100 });
cart.AddItem({ name: 'NomeItem2', price: 200 });
