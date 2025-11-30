import React from 'react';
import { features } from '../data/content';
import './Features.css';

export default function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Por que escolher a Armadura Programada?</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

