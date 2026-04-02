import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class CoffeeRoute extends Route {
  @service store;

  async model(params) {
    const coffees = await this.store.findAll('coffee');
    return coffees.find((coffee) => coffee.id === params.coffee_id);
  }

  afterModel() {
    window.scrollTo(0, 0);
  }
}
