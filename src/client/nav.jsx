import React from 'react';
import { Link } from 'react-router';

export default function Nav(){
  return (
    <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
      <Link className="navbar-brand" href="#">Tneb</Link>
      <ul className="nav navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dungeon">Dungeon</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/status">Status</Link>
        </li>
      </ul>
    </nav>
  );
}