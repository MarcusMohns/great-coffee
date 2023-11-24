import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CoffeesComponent extends Component {
  @tracked alertDisplayed = true;

  @action displayAlert() {
    this.alertDisplayed = true;
  }

  @action hideAlert() {
    this.alertDisplayed = false;
  }
}
