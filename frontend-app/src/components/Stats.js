import React from 'react';
import { stats } from '../data/content';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-item">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

