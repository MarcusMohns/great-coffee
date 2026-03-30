import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CoffeeImageComponent extends Component {
  @service shoppingCart;
  @service alert;
  @service shoppingCartState;

  @tracked qty = 1;
  @tracked selectedGround = 'freshlyGround';

  @action handleQtyChange(e) {
    this.qty = Number(e.target.value);
  }

  @action openShoppingCart() {
    this.shoppingCartState.isOpen = true;
  }

  @action showAlert(message, type) {
    this.alert.displayAlert(message, type);
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
