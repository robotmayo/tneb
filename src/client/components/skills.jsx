import React from 'react';

export default function ({skill}) {
  return (
    <div className="skill-display">
      <h2>{skill.name}</h2>
      <p>{skill.desc}</p>
    </div>
  );
}