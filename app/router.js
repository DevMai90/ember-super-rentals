import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  // Route name specfic URI
  this.route('about', { path: 'boogers' });
  this.route('contact', { path: 'snotrod' });
  this.route('rentals', { path: 'pokemons' });
});

export default Router;
