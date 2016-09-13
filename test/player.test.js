'use strict';

import test from 'ava';
import Player from '../src/game/player';
import DAMAGE_TYPES from '../src/game/data/damage-types.json';
import BASE_STATS from '../src/game/data/base-stats.json';
import createStats from '../src/game/utils/create-stats';

test('taking damage', t => {
  let p = new Player();
  let d = p.applyDamage({value :10, type : DAMAGE_TYPES.HP});
  t.is(p.stats.hp.current, 10);
});
