import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
  host = window.location.origin;

  buildURL(...args) {
    let url = super.buildURL(...args);
    return url.endsWith('.json') ? url : `${url}.json`;
  }
}
