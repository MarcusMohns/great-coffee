import Service from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShoppingCartDataService extends Service {
  @tracked items = A([]);
  @tracked total = 0;

  calcTotal() {
    this.total = this.items.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0,
    );
  }

  add(item) {
    if (this.items.length) {
      const stackedItems = this.items.map((coffee) =>
        coffee.name === item.name && coffee.ground === item.ground
          ? { ...coffee, quantity: coffee.quantity + item.quantity }
          : coffee,
      );
      // If the user wants more of the same product don't add a new product, increase quantity.
      if (
        this.items.find(
          (coffee) =>
            coffee.name === item.name && coffee.ground === item.ground,
        )
      ) {
        // do nothing
      } else {
        stackedItems.push(item);
      }

      this.items = A(stackedItems);
    } else {
      this.items.pushObject(item);
    }

    this.calcTotal();
  }
  remove(item) {
    this.items.removeObject(item);
    this.calcTotal(item.quantity);
  }

  empty() {
    this.items.clear();
    this.total = 0;
  }
}
