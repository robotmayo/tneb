'use strict';

import test from 'ava';
import Player from '../src/player';

test('taking damage', t => {
  let p = new Player();
  let d = p.takeDamage(10, 'hp');
  t.is(d, 10);
  t.is(p.coreStats.hp.stat.current, 10);
});
