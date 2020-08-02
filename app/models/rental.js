import DS from 'ember-data';

// Think of an Ember Data model as a schema for our requests.
export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  description: DS.attr()
});
