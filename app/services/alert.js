import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AlertService extends Service {
  @tracked alertDisplayed = false;
  @tracked isClosing = false;
  @tracked message = '';
  @tracked type = 'info';

  timeout = null;

  @action displayAlert(message, type = 'info') {
    this.message = message;
    this.type = type;
    this.isClosing = false;
    this.alertDisplayed = true;

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.hideAlert();
    }, 3000);
  }

  @action hideAlert() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    this.isClosing = true;

    // Wait for the CSS animation (400ms) before removing from DOM
    setTimeout(() => {
      this.alertDisplayed = false;
      this.isClosing = false;
    }, 400);
  }
}
