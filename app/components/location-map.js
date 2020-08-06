import Component from '@ember/component';
import { inject as service } from '@ember/service';

/**
 * This component is using the map-element service that we created.
 * Note that mapElement is camel cased, but the service is kebab case.
 */
export default Component.extend({
  classNames: ['map-container'],

  mapElement: service(),

  didInsertElement() {
    this._super(...arguments);
    this.mapElement.getMapElement(this.location).then((mapElement) => {
      this.element.append(mapElement);
    });
  }
});
