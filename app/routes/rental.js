import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export default class RentalRoute extends Route {
  // Model hook uses the params passed into the route to make the API call.
  // See router.js, params will contain the dynamic segment.
  async model(params) {
    // Using the dynamic segment here to make API request for single property.
    const response = await fetch(`/api/rentals/${params.rental_id}.json`);
    const { data } = await response.json();

    const { id, attributes } = data;
    let type;

    if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
      type = 'Community';
    } else {
      type = 'Standalone';
    }

    // Everything returned is accessible in route template as @model (or this.model)
    return {
      id,
      type,
      ...attributes
    }
  }
}