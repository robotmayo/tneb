'use strict';
import test from 'ava';
import createStats from '../src/utils/create-stats';

test('createStats', t => {
  t.plan(4);

  const testStatJSON = {
    "hp" : {
      "fullName" : "Hit Points",
      "abv" : "HP",
      "min" : 0,
      "max" : 20,
      "current" : 20,
      "isInt" : true
    },
    "str" : {
      "fullName" : "Strength",
      "abv" : "STR",
      "min" : 0,
      "max" : 5,
      "current" : 1,
      "isInt" : true
    }
  };
  const statsObj = createStats(testStatJSON);
  t.is(statsObj.hp.fullName, 'Hit Points');
  t.is(statsObj.hp.stat.current, 20);
  t.is(statsObj.str.fullName, 'Strength');
  t.is(statsObj.str.abv, 'STR');
});