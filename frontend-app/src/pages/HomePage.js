import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import CodeCard from '../components/CodeCard';
import LearningPath from '../components/LearningPath';
import './HomePage.css';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="home-hero">
        <div className="hero-inner">
          <section className="hero-left">
            <h1 className="hero-title">Aprenda Programação do<br/>Zero ao Profissional</h1>
            <p className="hero-desc">Transforme sua carreira com a linguagem mais procurada do mercado. Aprenda no seu ritmo com projetos práticos e mentoria personalizada.</p>
            <div className="hero-ctas">
              <Button variant="primary">Começar Gratuitamente</Button>
              <Button variant="outline">Ver Cursos</Button>
            </div>
            <div className="hero-footer">+15.000 alunos já transformaram suas carreiras</div>
          </section>
          <aside className="hero-right">
            <CodeCard>
{`function transformarCarreira() {
  const objetivo = 'dev full-stack';
  return estudar() + praticar();
}`}
            </CodeCard>
          </aside>
        </div>
      </main>

      <LearningPath />
    </div>
  );
}
