import React from 'react';
import BattleCard from './battle-card.jsx';

export default function Battle({battle, useSkill}){
  const skills = battle.player.skills.equipped.map(s => {
    return (
      <button onClick={() => useSkill(s.id)}>Use {s.name}</button>
    )
  });
  return (
    <div>
      <BattleCard actor={battle.player} >
        {skills}
      </BattleCard>


      <BattleCard actor={battle.target} >
        <h1>MOTHER FUCKING BAD GUY</h1>
      </BattleCard>
    </div>
  );
}