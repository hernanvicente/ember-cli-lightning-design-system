import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    progress(message) {
      alert(message);
    }
  }
});
