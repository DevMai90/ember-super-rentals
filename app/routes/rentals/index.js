import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    /**
     * Pass in the Ember Data model that we created.
     * Makes request to /api/rentals. Review application.js file for reference.
     * All requests are namspaced with /api
     * Notice how it says findAll('rental') -- It is singular. Ember knows to make it plural when making the API request because we have findAll
     */
    return this.store.findAll('rental');
  }
});
