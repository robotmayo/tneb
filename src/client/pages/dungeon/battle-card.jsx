import React from 'react';
import Stat from '../../components/stat.jsx';

export default function BattleCard({actor, children}) {
  return (
    <div className="col-lg-5">
      <div className="card">
        <div className="card-block">
          <h5>{actor.name}</h5>
          <Stat stat={actor.stats.coreStats.hp} currentMax={true}/>
          <Stat stat={actor.stats.coreStats.ap} currentMax={true}/>
          {children}
        </div>
      </div>
    </div>
  );
}