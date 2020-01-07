import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';

import { setupApplicationTest } from 'ember-qunit';

// Test will go to the list-rentals route and see if it loads.
module('Acceptance | list rentals', function(hooks) {
  // Sets up application test. This ensures that the Ember application is started and shut down between each test.
  setupApplicationTest(hooks);

  // QUnit passes in the assert object. Has methods that allow us to test.
  // Test must have one passing asset to be successful
  /*
  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
  */

  // Test driven development. Write our application goals as a series of tests.
  test('should show rentals as the home page', async assert => {
    await visit('/');

    assert.equal(
      currentURL(),
      '/rentals',
      'should redirect automatically to the rentals page'
    );
  });

  test('should link to information about the company', async assert => {
    await visit('/');
    // CSS Selector
    await click('.menu-about');

    assert.equal(currentURL(), '/about', 'should redirect to the about page');
  });

  test('should link to the contact information', async assert => {
    await visit('/');
    await click('.menu-contact');

    assert.equal(
      currentURL(),
      '/contact',
      'should redirect to the contact page'
    );
  });

  test('should list available rentals', async assert => {});

  test('should filter the list of rentals by city', async assert => {});

  test('should show details for a selected rental', async assert => {});
});
