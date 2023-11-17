import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartComponent extends Component {
  @service('shopping-cart-state') open;
  @service shoppingCart;

  @action toggleOpen() {
    this.open.isOpen = !this.open.isOpen;
  }
  @action decrementQty(item, e) {
    // e.target.nextElementSibling.value = item.quantity;
    this.shoppingCart.removeQty(item);
    e.target.nextElementSibling.value = item.quantity;
  }
  @action incrementQty(item, e) {
    this.shoppingCart.addQty(item);
    e.target.previousElementSibling.value = item.quantity;
  }

  @action handleQtyChange(e) {
    this.shoppingCart = Number(e.target.value);
  }

  @action removeItem(item) {
    this.shoppingCart.remove(item);
  }
}
