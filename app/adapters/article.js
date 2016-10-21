import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://drupal/',
  namespace: 'api/node',
  pathForType: function() {
    return 'article';
  },
  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(modelName, id, snapshot, requestType, query);
    return url + "?_format=api_json";
  }
});
