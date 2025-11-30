// Script para gerar Inventario_ICs.xlsx a partir do CSV
// Execute: node gerar_xlsx.js

const fs = require('fs');
const path = require('path');

// Dados do inventário (mesmos dados do CSV)
const inventarioData = [
  { id: 'IC-DOC01', nome: 'Plano de Projeto (PP)', tipo: 'Documento', versao: '1.0', responsavel: 'Gerente de Projeto', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/Plano%20de%20Projeto%20Armadura%20Programada.pdf' },
  { id: 'IC-DOC02', nome: 'Documento de Requisitos (DR)', tipo: 'Documento', versao: '1.0', responsavel: 'Product Owner', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/Documento%20de%20Requisitos%20-%20Projeto%20Armadura%20Programada.pdf' },
  { id: 'IC-DOC03', nome: 'Especificação de Requisitos de Software (ERS)', tipo: 'Documento', versao: '1.0', responsavel: 'Arquiteto de Software', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/documentacao/Requisitos/Especificacao_Requisitos.docx' },
  { id: 'IC-DOC04', nome: 'Inventário de Itens de Configuração', tipo: 'Documento', versao: '1.0', responsavel: 'Gerente de Configuração', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/documentacao/ICs/Inventario_ICs.csv' },
  { id: 'IC-DOC05', nome: 'Status Accounting', tipo: 'Documento', versao: '1.0', responsavel: 'Gerente de Configuração', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/documentacao/ICs/Status_Accounting.md' },
  { id: 'IC-DOC06', nome: 'Matriz de Rastreabilidade', tipo: 'Documento', versao: '1.0', responsavel: 'Product Owner', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/documentacao/Requisitos/Matriz_Rastreabilidade.xlsx' },
  { id: 'IC-DOC07', nome: 'Modelo de Caso de Uso', tipo: 'Documento', versao: '1.0', responsavel: 'Arquiteto de Software', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/documentacao/Requisitos/Especificacao_Requisitos.docx' },
  { id: 'IC-DOC08', nome: 'Diagrama de Classes', tipo: 'Documento', versao: '1.0', responsavel: 'Arquiteto de Software', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/documentacao/Requisitos/Especificacao_Requisitos.docx' },
  { id: 'IC-DOC09', nome: 'Modelo Estrutural (ERD)', tipo: 'Documento', versao: '1.0', responsavel: 'Arquiteto de Software', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/documentacao/Requisitos/Especificacao_Requisitos.docx' },
  { id: 'IC-DOC10', nome: 'Tabela de Necessidades (N001-N014)', tipo: 'Documento', versao: '1.0', responsavel: 'Product Owner', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/documentacao/Requisitos/Especificacao_Requisitos.docx' },
  { id: 'IC-DOC11', nome: 'Documentação de Arquitetura', tipo: 'Documento', versao: '1.0', responsavel: 'Arquiteto de Software', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/README.md' },
  { id: 'IC-DOC12', nome: 'README.md Principal', tipo: 'Documento', versao: '1.0', responsavel: 'Gerente de Projeto', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/README.md' },
  { id: 'IC-DOC13', nome: 'README.md Frontend', tipo: 'Documento', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/README.md' },
  { id: 'IC-DOC14', nome: 'README.md Backend', tipo: 'Documento', versao: '1.0', responsavel: 'Desenvolvedor Backend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/backend/README.MD' },
  { id: 'IC-DOC15', nome: 'LICENSE', tipo: 'Arquivo de Configuração', versao: '1.0', responsavel: 'Gerente de Projeto', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/LICENSE' },
  { id: 'IC-DOC16', nome: 'package.json Raiz', tipo: 'Arquivo de Configuração', versao: '1.0', responsavel: 'Gerente de Projeto', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/package.json' },
  { id: 'IC-DOC17', nome: 'package.json Frontend', tipo: 'Arquivo de Configuração', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/package.json' },
  { id: 'IC-DOC18', nome: 'package.json Backend', tipo: 'Arquivo de Configuração', versao: '1.0', responsavel: 'Desenvolvedor Backend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/backend/package.json' },
  { id: 'IC-DOC19', nome: '.gitignore Raiz', tipo: 'Arquivo de Configuração', versao: '1.0', responsavel: 'Gerente de Configuração', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/.gitignore' },
  { id: 'IC-DOC20', nome: '.gitignore Frontend', tipo: 'Arquivo de Configuração', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/.gitignore' },
  { id: 'IC-DOC21', nome: '.gitignore Backend', tipo: 'Arquivo de Configuração', versao: '1.0', responsavel: 'Desenvolvedor Backend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/backend/.gitignore' },
  { id: 'IC-COD01', nome: 'App.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/App.js' },
  { id: 'IC-COD02', nome: 'index.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/index.js' },
  { id: 'IC-COD03', nome: 'index.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/index.css' },
  { id: 'IC-COD04', nome: 'content.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/data/content.js' },
  { id: 'IC-COD05', nome: 'HomePage.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/pages/HomePage.js' },
  { id: 'IC-COD06', nome: 'HomePage.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/pages/HomePage.css' },
  { id: 'IC-COD07', nome: 'Header.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Header.js' },
  { id: 'IC-COD08', nome: 'Header.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Header.css' },
  { id: 'IC-COD09', nome: 'Hero.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Hero.js' },
  { id: 'IC-COD10', nome: 'Hero.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Hero.css' },
  { id: 'IC-COD11', nome: 'CodeWindow.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/CodeWindow.js' },
  { id: 'IC-COD12', nome: 'CodeWindow.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/CodeWindow.css' },
  { id: 'IC-COD13', nome: 'Stats.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Stats.js' },
  { id: 'IC-COD14', nome: 'Stats.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Stats.css' },
  { id: 'IC-COD15', nome: 'Features.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Features.js' },
  { id: 'IC-COD16', nome: 'Features.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Features.css' },
  { id: 'IC-COD17', nome: 'CTASection.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/CTASection.js' },
  { id: 'IC-COD18', nome: 'CTASection.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/CTASection.css' },
  { id: 'IC-COD19', nome: 'Footer.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Footer.js' },
  { id: 'IC-COD20', nome: 'Footer.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Footer.css' },
  { id: 'IC-COD21', nome: 'Button.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Button.js' },
  { id: 'IC-COD22', nome: 'CodeCard.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/CodeCard.js' },
  { id: 'IC-COD23', nome: 'codecard.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/codecard.css' },
  { id: 'IC-COD24', nome: 'LearningPath.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/LearningPath.js' },
  { id: 'IC-COD25', nome: 'learningpath.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/learningpath.css' },
  { id: 'IC-COD26', nome: 'Navbar.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/Navbar.js' },
  { id: 'IC-COD27', nome: 'navbar.css', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/src/components/navbar.css' },
  { id: 'IC-COD28', nome: 'server.js', tipo: 'Código Fonte', versao: '1.0', responsavel: 'Desenvolvedor Backend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/backend/server.js' },
  { id: 'IC-COD29', nome: 'index.html', tipo: 'Arquivo Estático', versao: '1.0', responsavel: 'Desenvolvedor Frontend', localizacao: 'https://github.com/[usuario]/Armadura-Programada/tree/main/frontend-app/public/index.html' }
];

console.log('Para gerar o arquivo XLSX, você precisa instalar a biblioteca exceljs:');
console.log('npm install exceljs');
console.log('\nOu abra o arquivo Inventario_ICs.csv no Excel e salve como .xlsx');

