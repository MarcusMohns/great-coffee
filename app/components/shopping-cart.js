import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartComponent extends Component {
  @service('shopping-cart-state') open;
  @service shoppingCart;

  @action items() {
    if (this.shoppingCart.items.length) {
      return this.shoppingCart.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0,
      );
    }
  }
  @action toggleOpen() {
    this.open.isOpen = !this.open.isOpen;
  }
  @action decrementQty(item) {
    this.shoppingCart.remove(item);

    if (item.quantity > 1) {
      this.shoppingCart.add({ ...item, quantity: item.quantity - 1 });
    }
  }
  @action incrementQty(item) {
    this.shoppingCart.add({ ...item, quantity: 1 });
  }

  @action handleQtyChange(item, e) {
    this.shoppingCart.handleQuantityChange(item, e.target.value);
  }

  @action removeItem(item) {
    this.shoppingCart.remove(item);
  }
}
