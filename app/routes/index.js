import Route from '@ember/routing/route';

export default Route.extend({
  // redirect is a route lifecycle hook. Hooks get called immediately when a route renders or data changes
  redirect() {
    // Do not add / in front
    this.transitionTo('rentals');
  }
});
