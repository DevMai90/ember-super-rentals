import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
// Render allows us to use template strings so we can write html
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  // Rental will be set to its own local scope in each test function
  hooks.beforeEach(function() {
    this.rental = {
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    };
  });

  test('should display rental details', async function(assert) {
    await render(hbs`{{rental-listing rental=this.rental}}`);

    assert.equal(
      this.element.querySelector('.listing h3').textContent.trim(),
      'test-title',
      'Title: test-title'
    );
    assert.equal(
      this.element.querySelector('.listing .owner').textContent.trim(),
      'Owner: test-owner',
      'Owner: test-owner'
    );
  });

  test('should toggle wide class on click', async function(assert) {
    await render(hbs`{{rental-listing rental=this.rental}}`);

    assert.notOk(
      this.element.querySelector('.image.wide'),
      'initially rendered small'
    );
    await click('.image');
    assert.ok(
      this.element.querySelector('.image.wide'),
      'redered wide after click'
    );
    await click('.image');
    assert.ok(
      this.element.querySelector('.image'),
      'rendered small after click'
    );
  });
});
