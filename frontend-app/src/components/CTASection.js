import React from 'react';
import { ctaContent } from '../data/content';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">{ctaContent.title}</h2>
        <p className="cta-description">{ctaContent.description}</p>
        <button className="cta-button">{ctaContent.button}</button>
      </div>
    </section>
  );
}

