import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CoffeeImageComponent extends Component {
  @tracked qty = 1;

  @tracked ground = 'freshlyGround';

  @action incrementQty() {
    this.qty += 1;
  }
  @action decrementQty() {
    this.qty <= 1 ? (this.qty = 1) : (this.qty -= 1);
  }

  @action handleGroundChange(value) {
    this.ground = value;
    console.log(value);
  }

  @action addToCart(items) {
    console.log(items);
  }
}
