import Component from '@glimmer/component';

export default class FrontPageComponent extends Component {
  /**
   * Returns the first 3 coffee items for the news section.
   * Assumes @coffees is passed in from the parent route/template.
   */
  get newsCoffees() {
    return this.args.coffees?.slice(0, 3) || [];
  }
}
