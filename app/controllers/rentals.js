import Controller from '@ember/controller';

/**
 * Controllers make actions and properties available to the corresponding route names.
 * Controller name therefore must match route name.
 * In this example, the actions object is exposed in the rentals route template file.
 */
export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.store.query('rental', { city: param }).then((results) => {
          return { query: param, results: results };
        });
      } else {
        return this.store.findAll('rental').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});
