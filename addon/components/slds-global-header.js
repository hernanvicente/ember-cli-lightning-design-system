import Ember from 'ember';
import layout from '../templates/components/slds-global-header';

export default Ember.Component.extend({
  layout,
  tagName: 'header',

  classNames: ['slds-global-header_container']
});
