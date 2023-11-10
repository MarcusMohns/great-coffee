import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CoffeesComponent extends Component {
  @tracked query = '';
}
