'use strict';
import test from 'ava';

import Stat from '../src/stat.js';

test('stat.changeFns Limiters', t => {
  let s = new Stat(0, 100, 0);
  s.addCurrent(999);
  t.is(s.current, 100);
  s.subCurrent(999);
  t.is(s.current, 0);

  s = new Stat(0, 100, 0);
  s.addMax(100);
  t.is(s.max, 200);
  s.subMax(999);
  t.is(s.max, 0);


  s = new Stat(0, 100, 0);
  s.addMin(999);
  t.is(s.min, 100);
  s.subMin(200);
  t.is(s.min, -100);

});

test('stat.changeFns Floats', t => {
  let s = new Stat(0, 100, 0);
  s.addCurrent(5.5);
  t.is(s.current, 5.5);

  s = new Stat(0,100, 10);
  s.subCurrent(5.5);
  t.is(s.current, 4.5);

  s = new Stat(0, 100, 0);
  s.addMax(5.5);
  t.is(s.max, 105.5);

  s = new Stat(0, 100, 0);
  s.subMax(50.5);
  t.is(s.max, 49.5);

  s = new Stat(0, 100, 0);
  s.addMin(5.5);
  t.is(s.min, 5.5);

  s = new Stat(0, 100, 0);
  s.subMin(5.5);
  t.is(s.min, -5.5);

});

test('stat.changeFns Int (Should always truncate)', t => {
  let s = new Stat(0, 100, 0, true);
  s.addCurrent(5.5);
  t.is(s.current, 5);

  s = new Stat(0,100, 10, true);
  s.subCurrent(5.5);
  t.is(s.current, 4);

  s = new Stat(0, 100, 0, true);
  s.addMax(5.5);
  t.is(s.max, 105);

  s = new Stat(0, 100, 0, true);
  s.subMax(50.5);
  t.is(s.max, 49);

  s = new Stat(0, 100, 0, true);
  s.addMin(5.5);
  t.is(s.min, 5);

  s = new Stat(0, 100, 0, true);
  s.subMin(5.5);
  t.is(s.min, -5);

});
