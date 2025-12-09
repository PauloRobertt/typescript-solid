import { CartItem } from './interface/cart-item';

export class ShoppingCart {
  private _items: CartItem[] = [];

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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clearCart(): void {
    this._items.length = 0;
  }

  get items(): readonly CartItem[] {
    return this._items;
  }
}
