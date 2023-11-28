import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CoffeesComponent extends Component {
  @service alert;

  @action hideAlert() {
    this.alert.alertDisplayed = false;
  }
}
