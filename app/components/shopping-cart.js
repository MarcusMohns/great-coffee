import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ShoppingCartComponent extends Component {
  @service shoppingCart;
  @service shoppingCartState;
  @service alert;

  get open() {
    return this.shoppingCartState;
  }

  get items() {
    return this.shoppingCart.items.reduce(
      (total, item) => total + item.quantity,
      0,
    );
  }

  @action toggleOpen() {
    this.shoppingCartState.isOpen = !this.shoppingCartState.isOpen;
  }

  @action removeItem(item) {
    this.shoppingCart.remove(item);
    this.alert.displayAlert(`${item.name} removed from cart.`, 'info');
  }

  @action incrementQty(item) {
    this.shoppingCart.handleQuantityChange(item, item.quantity + 1);
  }

  @action decrementQty(item) {
    this.shoppingCart.handleQuantityChange(item, item.quantity - 1);
  }

  @action handleQtyChange(item, e) {
    const val = parseInt(e.target.value);
    this.shoppingCart.handleQuantityChange(item, val);
  }

  @action checkout() {
    this.alert.displayAlert(
      'Thank you! Your order has been placed.',
      'success',
    );
    this.shoppingCart.empty(); // Assuming an empty method exists on your service
    this.shoppingCartState.isOpen = false;
  }
}
