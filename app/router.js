import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// Router tells application to run the respective router handler file to run when we hit the correct URL.
Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals');
});

export default Router;
