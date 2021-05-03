/**
 * Adapters and serializers are added as pairs.
 * Still add the serializer even if we are just extending
 */
import JSONAPISerializer from '@ember-data/serializer/json-api';

/**
 * No customization needed because Ember-Data uses JSON:API format by default.
 */
export default class ApplicationSerializer extends JSONAPISerializer{}
