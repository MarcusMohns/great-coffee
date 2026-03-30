import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AlertService extends Service {
  @tracked alertDisplayed = false;
  @tracked message = '';
  @tracked type = 'info';

  timeout = null;

  @action displayAlert(message, type = 'info') {
    this.message = message;
    this.type = type;
    this.alertDisplayed = true;

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.alertDisplayed = false;
      this.timeout = null;
    }, 3000);
  }

  @action hideAlert() {
    this.alertDisplayed = false;
  }
}
