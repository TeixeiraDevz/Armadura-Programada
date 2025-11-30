import React from 'react';
import './CodeWindow.css';

export default function CodeWindow({ children }) {
  // Função para processar o código e adicionar syntax highlighting básico
  const processCode = (code) => {
    const lines = code.split('\n');
    
    return lines.map((line, index) => {
      // Adiciona classes para diferentes tipos de tokens
      let processedLine = line;
      
      // Keywords (function, const, let, while, return, etc)
      processedLine = processedLine.replace(
        /\b(function|const|let|var|while|if|else|for|return|async|await|class|extends|import|export|from)\b/g,
        '<span class="keyword">$1</span>'
      );
      
      // Strings
      processedLine = processedLine.replace(
        /(["'])(.*?)\1/g,
        '<span class="string">$1$2$1</span>'
      );
      
      // Comentários
      processedLine = processedLine.replace(
        /(\/\/.*$)/g,
        '<span class="comment">$1</span>'
      );
      
      // Funções (palavras seguidas de parênteses)
      processedLine = processedLine.replace(
        /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g,
        '<span class="function">$1</span>('
      );
      
      return (
        <div 
          key={index} 
          className="code-line"
          dangerouslySetInnerHTML={{ __html: processedLine || '&nbsp;' }}
        />
      );
    });
  };

  return (
    <div className="code-window">
      <div className="code-window-header">
        <div className="window-dot dot-red"></div>
        <div className="window-dot dot-yellow"></div>
        <div className="window-dot dot-green"></div>
      </div>
      <div className="code-window-content">
        {processCode(children)}
      </div>
    </div>
  );
}

