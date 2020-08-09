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
  this.route('rentals', { path: 'pokemons' }, function () {
    this.route('index', { path: 'lolz' });
    this.route('show', { path: '/:rental_id' }); // Alias it with a rental_id parameter
  });
});

export default Router;
