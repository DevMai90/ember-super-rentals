import Component from '@ember/component';

export default Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      // Passing isWide as a string. toggle property is a method on the Component object.
      this.toggleProperty('isWide');
    }
  }
});
