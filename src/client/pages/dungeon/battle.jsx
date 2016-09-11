import React from 'react';
import BattleCard from './battle-card.jsx';

export default function Battle({battle, useSkill}){
  const skills = battle.player.skills.equipped.map(s => {
    return (
      <button onClick={() => useSkill(s)}>Use {s.name}</button>
    )
  });
  return (
    <div>
      <BattleCard actor={battle.player} >
        {skills}
      </BattleCard>
    </div>
  );
}