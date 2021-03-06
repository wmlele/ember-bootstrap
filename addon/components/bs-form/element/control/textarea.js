import { action } from '@ember/object';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import layout from 'ember-bootstrap/templates/components/bs-form/element/control/textarea';
import Control from '../control';
import deprecateSubclassing from 'ember-bootstrap/utils/deprecate-subclassing';

/**

 @class FormElementControlTextarea
 @namespace Components
 @extends Components.FormElementControl
 @private
 */
@templateLayout(layout)
@tagName('')
@deprecateSubclassing
export default class FormElementControlTextarea extends Control {
  @action
  handleChange(event) {
    this.onChange(event.target.value);
  }

  @action
  handleInput(event) {
    this.onChange(event.target.value);
  }
}
