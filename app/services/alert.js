import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShoppingCartDataService extends Service {
  @tracked alertDisplayed = false;

  @action displayAlert() {
    this.alertDisplayed = true;
  }

  @action hideAlert() {
    this.alertDisplayed = false;
  }
}
