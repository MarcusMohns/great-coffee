import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShoppingCartDataService extends Service {
  @tracked alertDisplayed = false;

  @action displayAlert() {
    if (this.alertDisplayed == false) {
      this.alertDisplayed = true;

      setTimeout(() => {
        this.alertDisplayed = false;
      }, '3000');
    }
  }

  @action hideAlert() {
    this.alertDisplayed = false;
  }
}
