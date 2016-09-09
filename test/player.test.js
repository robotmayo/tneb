'use strict';

import test from 'ava';
import Player from '../src/player';
import DAMAGE_TYPES from '../src/data/damage-types.json';
import BASE_STATS from '../src/data/base-stats.json';
import createStats from '../src/utils/create-stats';

test('taking damage', t => {
  let p = new Player();
  let d = p.takeDamage(10, DAMAGE_TYPES.HP);
  t.is(d, 10);
  t.is(p.stats.coreStats.hp.stat.current, 10);
});
