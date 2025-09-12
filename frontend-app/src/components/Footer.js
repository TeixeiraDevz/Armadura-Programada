import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Armadura Programada. Todos os direitos reservados.</p>
        <nav>
          <a href="#">Termos de Uso</a> |
          <a href="#">Política de Privacidade</a> |
          <a href="#">Contato</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
