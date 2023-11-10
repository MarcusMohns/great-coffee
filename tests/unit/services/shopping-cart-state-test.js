import { module, test } from 'qunit';
import { setupTest } from 'great-coffee/tests/helpers';

module('Unit | Service | shopping-cart-state', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:shopping-cart-state');
    assert.ok(service);
  });
});
