import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class CoffeesRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('coffee');
  }

  afterModel() {
    window.scrollTo(0, 0);
  }
}
