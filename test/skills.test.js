'use strict';
import test from 'ava';
import SkillData from '../src/game/data/skills.json';
import SkillScripts from '../src/game/scripts/skills';
import Formula from '../src/game/scripts/formula';
import Player from '../src/game/player';


test('skills.basicPhysical', t => {
  const skill = SkillScripts.basicPhysical;
  const P = new Player();
  const target = new Player();
  const fakeSD = {damage : {multiplier : 1, base : 5}};
  const startingHP = target.stats.hp.current;
  const baseStr = P.stats.str.current;
  fakeSD.raw = fakeSD.damage.base * (baseStr * fakeSD.damage.multiplier);
  fakeSD.types = [{
    "type" : "PHYSICAL",
    "ratio" : 1
  }];
  const fakeDD = {
    types : fakeSD.types,
    raw : fakeSD.raw,
    source : P,
    target : target
  };
  const expectedDamage = Formula.calculateDamage(fakeDD);
  const action = skill(null,  P, target, fakeSD);
  action.execute();
  t.not(startingHP, target.stats.hp.total());
});