import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class CoffeeRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('coffee', params.coffee_id);
  }
}
