import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  @attr name;
  @attr prices;
  //   @attr location;
  //   @attr category;
  @attr image;
  @attr description;
  //   @attr bedrooms;
  //   @attr description;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Coffee';
    } else {
      return 'Espresso';
    }
  }
}
