import Route from '@ember/routing/route';

export default Route.extend({
  // model hook is where we load data. Must connect our data model to the model hook.
  // Data becomes available in the Ember Data Store - global state
  model() {
    // Pass in name of the rental data model (class) that we're querying.
    return this.store.findAll('rental');

    // This is a test
  }
});
