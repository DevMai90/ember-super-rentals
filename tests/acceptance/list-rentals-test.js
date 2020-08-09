import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  click,
  find,
  findAll,
  fillIn,
  triggerKeyEvent
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list rentals', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Should show rentals as the home page', async function (assert) {
    assert.expect(1);

    await visit('/');

    assert.equal(
      currentURL(),
      '/pokemons/lolz',
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

  test('Should list available rentals', async function (assert) {
    assert.expect(1);

    await visit('/');

    assert.equal(
      await findAll('.listing').length,
      3,
      'Renders the correct number of available rentals'
    );
  });

  test('Should filter the list of rentals by city', async function (assert) {
    await visit('/');

    await fillIn('.list-filter input', 'seattle');

    await triggerKeyEvent('.list-filter input', 'keyup', 69);

    assert.equal(
      this.element.querySelectorAll('.results .listing').length,
      1,
      'should display 1 listing'
    );
    assert.ok(
      this.element
        .querySelector('.listing .location')
        .textContent.includes('Seattle'),
      'should contain 1 listing with location Seattle'
    );
  });

  test('Should show details for a selected rental', async function (assert) {
    assert.expect(3);

    await visit('/pokemons/lolz');
    await click('.grand-old-mansion');

    assert.equal(
      currentURL(),
      '/pokemons/grand-old-mansion',
      'should navigate to rental details'
    );
    assert.ok(
      find('.show-listing h2').textContent.includes('Grand Old Mansion'),
      'should list rental title'
    );
    assert.ok(
      find('.show-listing .description'),
      'should list description of property'
    );
  });
});
