import DS from 'ember-data';

// Configuring app to making requests with namespace of API.
export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
