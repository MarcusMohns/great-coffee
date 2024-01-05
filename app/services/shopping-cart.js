import Service from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShoppingCartDataService extends Service {
  @tracked items = A([]);
  @tracked total = 0;

  add(item) {
    if (this.items.length) {
      const stackedItems = this.items.map((coffee) =>
        coffee.name === item.name && coffee.ground === item.ground
          ? { ...coffee, quantity: coffee.quantity + item.quantity }
          : coffee,
      );
      // If the product exists - Add quantity.
      if (
        !this.items.find(
          (coffee) =>
            coffee.name === item.name && coffee.ground === item.ground,
        )
      ) {
        stackedItems.push(item);
      }
      // If the product doesn't exist yet - Add it.

      this.items = A(stackedItems);
      // Add to state
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

  calcTotal() {
    this.total = this.items.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0,
    );
  }

  handleQuantityChange(item, newQuantity) {
    if (newQuantity < 1) {
      this.remove(item);
    } else {
      const index = this.items.indexOf(item);
      const newItem = { ...item, quantity: Number(newQuantity) };
      this.items.replace(index, 1, [newItem]);
    }
    this.calcTotal();
  }
}
