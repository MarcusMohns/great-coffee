import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @service('shopping-cart-state') open;

  @action toggleOpen() {
    this.open.isOpen = !this.open.isOpen;
  }
  @tracked menuOpen = false;

  @action toggleMenuOpen() {
    this.menuOpen = !this.menuOpen;

    const smallNav = document.getElementById('small-nav-container');
    if (smallNav) {
      this.menuOpen
        ? (smallNav.style.display = 'flex')
        : (smallNav.style.display = 'none');
    }
  }
}
