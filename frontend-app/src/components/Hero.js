import React from 'react';
import { heroContent } from '../data/content';
import CodeWindow from './CodeWindow';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{heroContent.title}</h1>
          <p className="hero-description">{heroContent.description}</p>
          <div className="hero-buttons">
            <button className="hero-btn-primary">{heroContent.primaryButton}</button>
            <button className="hero-btn-secondary">{heroContent.secondaryButton}</button>
          </div>
        </div>
        <div className="hero-visual">
          <CodeWindow>{heroContent.codeSnippet}</CodeWindow>
        </div>
      </div>
    </section>
  );
}

