import React from 'react';
import { navLinks } from '../data/content';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">
          <span className="logo-icon">⚔️</span>
          Armadura Programada
        </div>
        <ul className="header-nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button className="header-cta-button">Começar Agora</button>
      </nav>
    </header>
  );
}

