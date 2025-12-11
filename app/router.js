import EmberRouter from '@ember/routing/router';
import config from 'great-coffee/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('coffees');
  this.route('coffee', { path: '/coffees/:coffee_id' });
});
