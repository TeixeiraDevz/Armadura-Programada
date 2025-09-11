import React from 'react';
import './learningpath.css';

function Item({ num, title, desc }) {
  return (
    <div className="lp-item">
      <div className="lp-num">{num}</div>
      <div className="lp-card">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function LearningPath() {
  return (
    <section className="lp-section">
      <h2>Sua Jornada de Aprendizado</h2>
      <div className="lp-list">
        <Item num={1} title="Fundamentos" desc="Comece do zero com HTML, CSS e lógica de programação. Aprenda os conceitos essenciais para construir suas primeiras páginas web." />
        <Item num={2} title="JavaScript Moderno" desc="Domine a linguagem que move a web. Desde variáveis até conceitos avançados como promises e async/await." />
        <Item num={3} title="React & Frontend" desc="Construa interfaces modernas e interativas com React, a biblioteca mais popular do mercado." />
        <Item num={4} title="Backend & APIs" desc="Aprenda Node.js, bancos de dados e como criar APIs robustas para suas aplicações." />
      </div>
    </section>
  );
}
