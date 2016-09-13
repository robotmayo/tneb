'use strict';
import test from 'ava';

import Stat from '../src/game/stat.js';

test('stat.constructor', t => {
  t.throws(
    () => new Stat({min : 0, max : -1, current : 0})
  );

  t.throws(
    () => new Stat({min : 1, max : 0,current : 0})
  );

  let s = new Stat({min : 0, max : 10, current : 9999});
  t.is(s.current, 10);

  s = new Stat({min : 0, max : 10, current : 5.5, isInt : true});
  t.is(s.current, 5);

  s = new Stat({min : 0, max : 100, current : 1, isInt : true, abv : 'HP', fullName : 'Health Points'});
  t.is(s.abv, 'HP');
  t.is(s.fullName, 'Health Points');

});

test('stat.changeFns Limiters', t => {
  let s = new Stat({min : 0, max : 100, current : 0});
  s.addCurrent(999);
  t.is(s.current, 100);
  s.subCurrent(999);
  t.is(s.current, 0);

  s = new Stat({min : 0, max : 100, current : 0});
  s.addMax(100);
  t.is(s.max, 200);
  s.subMax(999);
  t.is(s.max, 0);


  s = new Stat({min : 0, max : 100, current : 0});
  s.addMin(999);
  t.is(s.min, 100);
  s.subMin(200);
  t.is(s.min, -100);

});

test('stat.changeFns Floats', t => {
  let s = new Stat({min : 0, max : 100, current : 0});
  s.addCurrent(5.5);
  t.is(s.current, 5.5);

  s = new Stat({min : 0, max : 100, current : 10});
  s.subCurrent(5.5);
  t.is(s.current, 4.5);

  s = new Stat({min : 0, max : 100, current : 0});
  s.addMax(5.5);
  t.is(s.max, 105.5);

  s = new Stat({min : 0, max : 100, current : 0});
  s.subMax(50.5);
  t.is(s.max, 49.5);

  s = new Stat({min : 0, max : 100, current : 0});
  s.addMin(5.5);
  t.is(s.min, 5.5);

  s = new Stat({min : 0, max : 100, current : 0});
  s.subMin(5.5);
  t.is(s.min, -5.5);

});

test('stat.changeFns Int (Should always truncate)', t => {
  let s = new Stat({min : 0, max : 100, current : 0, isInt : true});
  s.addCurrent(5.5);
  t.is(s.current, 5);

  s = new Stat({min : 0, max : 100, current : 10, isInt : true});
  s.subCurrent(5.5);
  t.is(s.current, 4);

  s = new Stat({min : 0, max : 100, current : 0, isInt : true});
  s.addMax(5.5);
  t.is(s.max, 105);

  s = new Stat({min : 0, max : 100, current : 0, isInt : true});
  s.subMax(50.5);
  t.is(s.max, 49);

  s = new Stat({min : 0, max : 100, current : 0, isInt : true});
  s.addMin(5.5);
  t.is(s.min, 5);

  s = new Stat({min : 0, max : 100, current : 0, isInt : true});
  s.subMin(5.5);
  t.is(s.min, -5);

});


test('stat.modifiers and total', t => {
  let s = new Stat({min : 0, max : 10, current : 0, isInt : true});
  let sm = () => 1;
  let fid = s.addFlatModifier(sm);
  t.is(s.flatModifiers[0].fn, sm);
  let pid = s.addPercentModifier(sm);
  t.is(s.percentModifiers[0].fn, sm);

  s.removeFlatModifier(fid);
  t.is(s.flatModifiers.length, 0);
  s.removePercentModifier(pid);
  t.is(s.percentModifiers.length, 0);

  s = new Stat({min : 0, max : 1000, current : 50, isInt : true});
  t.is(s.total(), 50);

  s.addFlatModifier(() => 10);
  t.is(s.total(), 60);
  s.addFlatModifier(() => 40);
  t.is(s.total(), 100);

  s.addPercentModifier(() => 100);
  t.is(s.total(), 200, 'Percents should be calculated after flat values');

});




