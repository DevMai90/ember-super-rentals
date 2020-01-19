import DS from 'ember-data';

// Defines the shape of our data model. (think schema)
export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  bedrooms: DS.attr(),
  image: DS.attr(),
  description: DS.attr()
});
