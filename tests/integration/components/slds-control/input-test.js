import { findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control/input', 'Integration | Component | slds control/input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control/input}}`);
  assert.ok(findAll('.slds-form-element__control').length, 'renders control element');
  assert.ok(findAll('.slds-form-element__control input').length, 'renders input');
});

test('it renders with icon (left)', function(assert) {
  this.render(hbs`{{slds-control/input icon='left'}}`);
  assert.ok(findAll('.slds-form-element__control.slds-input-has-icon.slds-input-has-icon_left input').length);
});

test('it renders with icon (right)', function(assert) {
  this.render(hbs`
    {{#slds-control/input icon='right' as |input|}}
      {{input.icon-left}}
      {{input.textbox}}
    {{/slds-control/input}}
  `);

  assert.ok(findAll('.slds-form-element__control.slds-input-has-icon.slds-input-has-icon_right input').length);
  assert.ok(findAll('.slds-form-element__control.slds-input-has-icon .slds-input__icon.slds-input__icon--left').length);
});
