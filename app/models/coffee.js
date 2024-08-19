import Model, { attr } from '@ember-data/model';

const BEAN_CATEGORIES = ['Arabica'];

export default class CoffeeModel extends Model {
  @attr name;
  @attr price;
  @attr image;
  @attr description;
  @attr reviews;
  @attr bean;

  get type() {
    if (BEAN_CATEGORIES.includes(this.bean)) {
      return 'Espresso';
    } else {
      return 'Coffee';
    }
  }
}
