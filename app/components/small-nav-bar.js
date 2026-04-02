import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @service('shopping-cart-state') open;
  @service shoppingCart;

  @action toggleOpen() {
    this.open.isOpen = !this.open.isOpen;
  }
  get items() {
    return this.shoppingCart.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0,
    );
  }

  @tracked menuOpen = false;

  @action toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;

    const smallNav = document.getElementById('small-nav-container');

    this.menuOpen
      ? (smallNav.style.display = 'flex')
      : (smallNav.style.display = 'none');
  }
}
