import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// Router tells application to run the respective router handler file to run when we hit the correct URL.
// Index route does not need an entry. Related to nested routes
Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals');
});

export default Router;
