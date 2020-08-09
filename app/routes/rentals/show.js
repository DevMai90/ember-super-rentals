import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id); // rental_id is available because we aliased our router.js entry.
  }
});
