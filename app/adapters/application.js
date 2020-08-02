import DS from 'ember-data';

// Configuring app to making requests with namespace of API.
// May have to edit this file if making external API calls.
export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
