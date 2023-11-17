import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CoffeeImageComponent extends Component {
  @service shoppingCart;

  @tracked qty = 1;

  @tracked selectedGround = 'freshlyGround';

  @action incrementQty() {
    this.qty += 1;
  }

  @action decrementQty() {
    this.qty <= 1 ? (this.shoppingCart.qty = 1) : (this.qty -= 1);
  }

  @action handleQtyChange(e) {
    this.qty = Number(e.target.value);
  }

  @action handleGroundChange(e) {
    this.selectedGround = e.target.value;
  }

  @action addToCart(price, name, image) {
    this.shoppingCart.add({
      name: name,
      quantity: this.qty,
      ground: this.selectedGround,
      price: price,
      image: image,
    });
  }
}
