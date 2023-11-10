import { module, test } from 'qunit';
import { setupRenderingTest } from 'great-coffee/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | coffee', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Coffee />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Coffee>
        template block text
      </Coffee>
    `);

    assert.dom().hasText('template block text');
  });
});
