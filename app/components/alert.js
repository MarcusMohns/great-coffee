import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AlertComponent extends Component {
  @service alert;

  get icon() {
    const icons = {
      success: '✓',
      error: '✕',
      info: 'ℹ',
    };

    return icons[this.alert.type] || '';
  }

  get message() {
    return this.alert.message || 'Action Successful!';
  }

  @action hideAlert() {
    this.alert.alertDisplayed = false;
  }
}
