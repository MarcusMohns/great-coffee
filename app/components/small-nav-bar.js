import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @service('shopping-cart-state') open;

  @action toggleOpen() {
    this.open.isOpen = !this.open.isOpen;
  }
}
