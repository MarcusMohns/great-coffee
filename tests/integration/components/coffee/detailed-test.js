import { module, test } from 'qunit';
import { setupRenderingTest } from 'great-coffee/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | coffee/detailed', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Coffee::Detailed />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Coffee::Detailed>
        template block text
      </Coffee::Detailed>
    `);

    assert.dom().hasText('template block text');
  });
});
