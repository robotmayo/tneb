'use strict';
import test from 'ava';
import Formula from '../src/game/scripts/formula';
import DAMAGE_TYPES from '../src/game/data/damage-types.json';

const target = {
  stats : {
    coreStats : {
      def : {
        stat : {
          total : () => 5000
        }
      },
      res : {
        stat : {
          total : () => 5000
        }
      }
    }
  }
};
const DD = {
  raw : 100000,
  target
};
const DD_TYPE = {
  ratio : 1
};

test('Formula.physicalDamage', t => {
  const damage = Formula.physicalDamage(DD, DD_TYPE);
  t.is(Math.trunc(damage), 48979);
});

test('Formula.magicDamage', t => {
  const damage = Formula.magicDamage(DD, DD_TYPE);
  t.is(Math.trunc(damage), 36908);
});

test('Formula.calculateDamage', t => {
  let DD = {
    raw : 100000,
    target,
    types : [
      {
        type : DAMAGE_TYPES.PHYSICAL,
        ratio : 1
      },
      {
        type : DAMAGE_TYPES.MAGICAL,
        ratio : 1
      },
      {
        type : 'fake',
        ratio : 1
      }
    ]
  };
  const damageData = Formula.calculateDamage(DD);
  t.is(damageData[0].type, DAMAGE_TYPES.PHYSICAL);
  t.is(Math.trunc(damageData[0].value), 48979);
  t.is(damageData[1].type, DAMAGE_TYPES.MAGICAL);
  t.is(Math.trunc(damageData[1].value), 36908);
  t.deepEqual(damageData[2], {type : 'fake', value : -1}, 'For unknown types it should just return the type and -1')
});