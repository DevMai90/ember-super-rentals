import Route from '@ember/routing/route';

export default Route.extend({
  // Route lifecycle hook
  beforeModel() {
    // Pass in desired route. replaces browser history / with /rentals
    this.replaceWith('rentals');
  }
});
