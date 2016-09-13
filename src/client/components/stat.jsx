import React from 'react';

export default function Stat({stat, currentMax}){
  if(currentMax){
    return (
      <div className="stat-display">
        <h3>{stat.fullName}({stat.abv})</h3>
        <p>{stat.total()} / {stat.max}</p>
      </div>
    );
  }
  return (
    <div className="stat-display">
      <h3>{stat.fullName}({stat.abv})</h3>
      <p>{stat.total()}</p>
    </div>
  );
}