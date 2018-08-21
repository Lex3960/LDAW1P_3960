import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | lab', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:lab');
    assert.ok(route);
  });
});
