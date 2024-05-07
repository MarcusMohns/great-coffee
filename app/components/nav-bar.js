import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavBarComponent extends Component {
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
    console.log(this.shoppingCart.total);
  }
}
