import Component from '@glimmer/component';

export default class CoffeesFilterComponent extends Component {
  get results() {
    let { coffees, query } = this.args;

    if (query) {
      coffees = coffees.filter((coffee) =>
        coffee.name.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return coffees;
  }
}
