import Service from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShoppingCartDataService extends Service {
  items = A([]);
  @tracked total = 0;

  calcTotal(quantity) {
    this.total = this.items.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * quantity,
      0,
    );

    console.log(this.total);
  }

  add(item, quantity) {
    this.items.pushObject(item);
    this.calcTotal(quantity);
  }

  remove(item, quantity) {
    this.items.removeObject(item);
    this.calcTotal(quantity);
  }

  empty() {
    this.items.clear();
    this.total = 0;
  }
}
