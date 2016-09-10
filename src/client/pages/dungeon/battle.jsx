import React from 'react';
import BattleCard from './battle-card.jsx';

export default function Battle({battle}){
  return (
    <div>
      <BattleCard actor={battle.player} />
    </div>
  );
}