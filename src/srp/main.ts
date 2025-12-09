import { ShoppingCart } from './entities/shopping-cart';
import { Order } from './entities/order';
import { Message } from './services/message';
import { Product } from './entities/product';

const cart = new ShoppingCart();
const msg = new Message();
const order = new Order(cart, msg);
cart.AddItem(new Product('NomeItem1', 100));
cart.AddItem(new Product('NomeItem2', 200));
console.log(cart.items);
order.checkout();
