import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


// const COMMUNITY_CATEGORIES = [
//   'Condo',
//   'Townhouse',
//   'Apartment'
// ];

export default class RentalRoute extends Route {
  // Model hook uses the params passed into the route to make the API call.
  // See router.js, params will contain the dynamic segment.
  // async model(params) {
  //   // Using the dynamic segment here to make API request for single property.
  //   const response = await fetch(`/api/rentals/${params.rental_id}.json`);
  //   const { data } = await response.json();
  //   ....

  // Refactor using Ember Data model
  @service store;

  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}