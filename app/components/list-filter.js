import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],

  value: '',

  init() {
    this._super(...arguments);
    // filter is an Ember method that gets called. Initialized with empty string ''
    // Then set results property according to what is passed into the callback
    this.filter('').then((allResults) => {
      this.set('results', allResults.results);
    });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      // filter function is usable by calling the object. This is called closure actions
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === this.value) {
          this.set('results', filterResults.results);
        }
      });
    }
  }
});
