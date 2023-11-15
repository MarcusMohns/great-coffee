import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShoppingCartComponent extends Component {
  @service('shopping-cart-state') open;
  @service shoppingCart;

  @action toggleOpen() {
    this.open.isOpen = !this.open.isOpen;
  }

  @action removeItem(item) {
    this.shoppingCart.remove(item);
  }
}
