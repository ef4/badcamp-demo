import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  modelNameFromPayloadKey() {
    return 'article';
  }
});
