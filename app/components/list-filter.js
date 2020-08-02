import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],

  value: '',

  init() {
    this._super(...arguments);
    // filter is an Ember method that gets called. Initialized with empty string ''
    // Then set results property according to what is passed into the callback
    this.filter('').then((results) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResults) =>
        this.set('results', filterResults)
      );
    }
  }
});
