import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    window.scrollTo(0, 0);
    return this.store.findAll('coffee');
  }
}
