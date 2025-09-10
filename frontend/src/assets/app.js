import React from "react";
import "./homepage.css";


export default function HomePage() {
  return (
    <div className="homepage-bg">
      {/* Navbar */}
      <nav className="homepage-navbar">
        <span className="homepage-logo">Armadura</span>
        <div className="homepage-menu">
          <a href="#">Cursos</a>
          <a href="#">Sobre</a>
          <a href="#">Comunidade</a>
          <a href="#">Blog</a>
        </div>
        <button className="homepage-btn homepage-btn-gradient">Entrar</button>
      </nav>

      {/* Conteúdo principal */}
      <div className="homepage-main">
        <div>
          <h1 className="homepage-title">
            Aprenda Programação do<br />Zero ao Profissional
          </h1>
          <p className="homepage-desc">
            Transforme sua carreira com a linguagem mais procurada do mercado.<br />
            Aprenda no seu ritmo com projetos práticos e mentoria personalizada.
          </p>
          <div>
            <button className="homepage-btn homepage-btn-gradient">
              Começar Gratuitamente
            </button>
            <button className="homepage-btn homepage-btn-outline">
              Ver Cursos
            </button>
          </div>
          <div className="homepage-alunos">
            <span className="homepage-alunos-gradient">+15.000 alunos</span> já transformaram suas carreiras
          </div>
        </div>
        {/* Card de código */}
        <div className="homepage-codecard">
          <div className="homepage-codecard-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <pre>
            <span className="code-yellow">function</span> <span className="code-purple">transformarCarreira</span>() {"{"}{"\n"}
            &nbsp;&nbsp;<span className="code-yellow">const</span> objetivo = <span className="code-green">'dev full-stack'</span>;{"\n"}
            &nbsp;&nbsp;<span className="code-yellow">return</span> <span className="code-purple">estudar()</span> + <span className="code-purple">praticar()</span>;{"\n"}
            {"}"}
          </pre>
        </div>
      </div>
    </div>
  );
}