import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | rental-property-type', function (hooks) {
  setupRenderingTest(hooks);

  test('It renders correctly for a standalone rental', async function (assert) {
    assert.expect(1);

    this.set('inputValue', 'Estate');

    await render(hbs`{{rental-property-type this.inputValue}}`);

    assert.equal(
      this.element.textContent.trim(),
      'Standalone',
      'Standalone type is correctly rendered'
    );
  });

  test('It renders correctly for a community rental', async function (assert) {
    assert.expect(1);

    this.set('inputValue', 'Apartment');

    await render(hbs`{{rental-property-type this.inputValue}}`);

    assert.equal(
      this.element.textContent.trim(),
      'Community',
      'Community type is correctly rendered'
    );
  });
});
