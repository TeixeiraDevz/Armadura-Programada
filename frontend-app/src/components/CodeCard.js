import React from 'react';
import './codecard.css';

export default function CodeCard({ children }) {
  return (
    <div className="codecard">
      <div className="codecard-dots">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <pre className="code-content">{children}</pre>
    </div>
  );
}
