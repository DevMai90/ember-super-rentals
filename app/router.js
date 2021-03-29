import EmberRouter from '@ember/routing/router';
import config from 'ember-super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
  // :rental_id is the dynamic segment that we will get from the route.
  // Dyanmic segment is accessible in route model hook as the first argument.
  this.route('rental', { path: '/rentals/:rental_id'});
});
