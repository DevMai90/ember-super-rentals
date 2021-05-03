// application.js is the application adapter. 
// Will be used to fetch data for all models in app

import JSONAPIAdapter from '@ember-data/adapter/json-api';

/**
 * Adapters deal with how and where API requests are made.
 */
export default class ApplcationAdapter extends JSONAPIAdapter {
  // automatically prepends 'api' in API requests.
  namespace = 'api';

  // JSON Api Adapter has a buildURL method. We are essentially overriding/customizing it.
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}