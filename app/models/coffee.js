import Model, { attr } from '@ember-data/model';

const BEAN_CATEGORIES = ['Arabica'];

export default class CoffeeModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('string') roastLevel;
  @attr('number') reviews;
  @attr('string') image;
  @attr('string') bean;
  @attr('number') price;

  get type() {
    if (BEAN_CATEGORIES.includes(this.bean)) {
      return 'Espresso';
    } else {
      return 'Coffee';
    }
  }

  get roastIcon() {
    switch (this.roastLevel) {
      case 'Light':
        return '☀️';
      case 'Medium':
        return '☕';
      case 'Dark':
        return '🌙';
      default:
        return '';
    }
  }
}
