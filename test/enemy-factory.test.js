import test from 'ava';

import EnemyDB from '../src/game/data/enemies.json';
import EnemyFactory from '../src/game/enemy-factory';

test('Enemy Factory', t => {
  const TestSlimeData = EnemyDB.testSlime;
  const e = EnemyFactory.create('testSlime');
  t.fail('Write a test for this!');

});