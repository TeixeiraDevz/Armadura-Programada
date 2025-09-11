import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <div className="brand">CodePath</div>
        <nav className="nav-links">
          <a href="#">Cursos</a>
          <a href="#">Sobre</a>
          <a href="#">Comunidade</a>
          <a href="#">Blog</a>
        </nav>
        <button className="nav-cta">Entrar</button>
      </div>
    </header>
  );
}
