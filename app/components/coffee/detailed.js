import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CoffeeImageComponent extends Component {
  @tracked qty = 1;

  @tracked selectedGround = 'freshlyGround';

  @action incrementQty() {
    this.qty += 1;
  }

  @action decrementQty() {
    this.qty <= 1 ? (this.qty = 1) : (this.qty -= 1);
  }
  @action handleGroundChange(e) {
    this.selectedGround = e.target.value;
  }

  @action addToCart(price) {
    console.log(price);
  }
}
