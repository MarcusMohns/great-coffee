import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShoppingCartDataService extends Service {
  @tracked isOpen = false;

  @action toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
