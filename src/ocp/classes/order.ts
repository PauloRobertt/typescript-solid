import { StatusCart } from './interface/status-cart';
import { ShoppingCart } from './shopping-cart';
import { Message } from '../services/message';

export class Order {
  private _orderStatus: StatusCart = 'Open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly msg: Message,
  ) {}

  checkout() {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio');
      return;
    }

    this._orderStatus = 'Closed';
    this.msg.sendMessage('Seu pedido foi recebido');
    this.cart.clearCart();
  }

  get orderStatus(): StatusCart {
    return this._orderStatus;
  }
}
