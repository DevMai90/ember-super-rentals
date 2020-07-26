import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('Should show rentals as the home page', async function (assert) {
    assert.expect(1);

    await visit('/');

    assert.equal(
      currentURL(),
      '/pokemons',
      'Should redirect automatically to pokemons route (alias for rentals route)'
    );
  });

  test('Should link to information about company from menu', async function (assert) {
    assert.expect(1);

    await visit('/');

    await click('.menu-about');

    assert.equal(
      currentURL(),
      '/boogers',
      'Should navigate to /boogers (alias for about route)'
    );
  });

  test('Should link to contact information from menu', async function (assert) {
    assert.expect(1);

    await visit('/');

    await click('.menu-contact');

    assert.equal(
      currentURL(),
      '/snotrod',
      'Should navigate to /snotrod (alias for contact route)'
    );
  });

  test('Should list available rentals', async function (assert) {});

  test('Should filter the list of rentals by city', async function (assert) {});

  test('Should show details for a selected rental', async function (assert) {});
});
