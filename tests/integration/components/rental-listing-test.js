import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rental-listing', function (hooks) {
  setupRenderingTest(hooks);

  // Mock data that would normally be returned by the route's model hook.
  hooks.beforeEach(function () {
    this.rental = {
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    };
  });

  test('Should display rental details', async function (assert) {
    assert.expect(6);

    await render(hbs`{{rental-listing rental=this.rental}}`);

    assert.ok(find('.image img'), 'Rental image exists');
    assert.ok(find('.details h3'), 'Rental title exists');
    assert.ok(find('.detail.owner'), 'Rental owner exists');
    assert.ok(find('.detail.type'), 'Rental type exists');
    assert.ok(find('.detail.location'), 'Rental city exists');
    assert.ok(find('.detail.bedrooms'), 'Rental bedrooms exists');
  });

  test('Should toggle wide class on click', async function (assert) {
    assert.expect(3);

    await render(hbs`{{rental-listing rental=this.rental}}`);

    assert.notOk(find('.wide'), 'Wide class is not set by default');

    await click('.image');

    assert.ok(find('.image.wide'), 'Wide class is toggled after click');

    await click('.image');

    assert.notOk(
      find('.image.wide'),
      'Wide class is removed after second click'
    );
  });
});
