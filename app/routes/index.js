import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    window.scrollTo(0, 0);
  }
}
