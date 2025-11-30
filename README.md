# 🛡️ Armadura Programada - Plataforma de Aprendizado de Programação

[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)](https://github.com/equipe-armadura/armadura-projeto)
[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

> **Plataforma educacional moderna para iniciantes em programação** - Construa sua armadura de conhecimento com trilhas guiadas, projetos práticos e uma comunidade ativa.

## 📌 Sobre o Projeto

O **Armadura Programada** é uma plataforma web completa destinada a **iniciantes em programação**, oferecendo:

- 🎯 **Landing Page Moderna** com design dark mode e animações suaves
- 📚 **Trilhas de Aprendizado Guiadas** do básico ao avançado
- 💻 **Projetos Práticos** para construir um portfólio profissional
- 👥 **Comunidade Ativa** para suporte e networking
- 🏆 **Sistema de Certificados** para valorizar seu aprendizado
- ⚡ **Interface Responsiva** otimizada para todos os dispositivos

Este projeto demonstra **boas práticas de desenvolvimento frontend** com arquitetura componentizada, código limpo e experiência do usuário excepcional.

## 🎨 Design e UX

A plataforma apresenta um design moderno e profissional com:

- **Dark Mode** com gradientes cyan/blue
- **Animações Suaves** para engajamento visual
- **Código Interativo** com syntax highlighting
- **Responsividade Mobile-First**
- **Acessibilidade** seguindo padrões WCAG

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM 6.22.3** - Roteamento declarativo
- **CSS3** - Estilização modular com variáveis CSS
- **Create React App** - Configuração e build otimizados

### Estrutura do Projeto
```
Armadura-Programada/
├── frontend-app/                 # Aplicação React
│   ├── public/                   # Arquivos públicos estáticos
│   ├── src/
│   │   ├── components/           # Componentes reutilizáveis
│   │   │   ├── Header.js         # Navegação principal
│   │   │   ├── Header.css
│   │   │   ├── Hero.js           # Seção hero com CTA
│   │   │   ├── Hero.css
│   │   │   ├── CodeWindow.js     # Janela de código animada
│   │   │   ├── CodeWindow.css
│   │   │   ├── Stats.js          # Grid de estatísticas
│   │   │   ├── Stats.css
│   │   │   ├── Features.js       # Cards de funcionalidades
│   │   │   ├── Features.css
│   │   │   ├── CTASection.js     # Call-to-action
│   │   │   ├── CTASection.css
│   │   │   ├── Footer.js         # Rodapé com links
│   │   │   └── Footer.css
│   │   ├── data/
│   │   │   └── content.js        # Dados estáticos da aplicação
│   │   ├── pages/
│   │   │   ├── HomePage.js       # Página inicial
│   │   │   └── HomePage.css
│   │   ├── App.js                # Componente raiz com rotas
│   │   ├── index.js              # Entry point
│   │   └── index.css             # Reset CSS e variáveis globais
│   └── package.json
├── backend/                      # Backend Node.js (em desenvolvimento)
├── documentacao/                 # Documentação completa do projeto
│   ├── ICs/                      # Inventário de Itens de Configuração
│   ├── Requisitos/               # Especificação de Requisitos
│   └── Diagramas/                # Diagramas e modelos
├── LICENSE
└── README.md
```

## 📚 Documentação

O projeto possui documentação completa de engenharia de software organizada na pasta `documentacao/`:

### Inventário de Itens de Configuração (ICs)
- **CSV:** [`documentacao/ICs/Inventario_ICs.csv`](documentacao/ICs/Inventario_ICs.csv)
- **XLSX:** [`documentacao/ICs/Inventario_ICs.xlsx`](documentacao/ICs/Inventario_ICs.xlsx) (gerado via script)

Mapeamento completo de todos os arquivos, documentos e componentes do projeto com links diretos para o GitHub.

### Especificação de Requisitos de Software (ERS)
- **DOCX:** [`documentacao/Requisitos/Especificacao_Requisitos.docx`](documentacao/Requisitos/Especificacao_Requisitos.docx) (gerado via script)

Documento completo contendo:
- Identificação de Subsistemas (7 subsistemas)
- Modelo de Caso de Uso (3 atores principais)
- Diagramas de Classes
- Modelo Estrutural (ERD)
- Tabela de Necessidades (N001-N014)
- Requisitos não funcionais

**📖 [Ver Documentação Completa](documentacao/README.md)**

## 📦 Instalação e Execução

### Pré-requisitos

- **Node.js** 18 ou superior
- **npm** 9 ou superior
- **Git** para clonar o repositório

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/Armadura-Programada.git
   cd Armadura-Programada
   ```

2. **Instale as dependências do frontend**
   ```bash
   cd frontend-app
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```

4. **Acesse a aplicação**
   
   Abra seu navegador em `http://localhost:3000`

## 🧪 Scripts Disponíveis

No diretório `frontend-app`, você pode executar:

### `npm start`
Inicia o servidor de desenvolvimento com hot reload.
A página recarrega automaticamente quando você faz alterações no código.

### `npm run build`
Cria a build de produção otimizada na pasta `build/`.
Os arquivos são minificados e otimizados para melhor performance.

### `npm test`
Executa a suíte de testes em modo interativo.

### `npm run eject`
**Nota: Esta é uma operação sem volta!**
Remove a abstração do Create React App e expõe todas as configurações.

## 🏗️ Arquitetura e Boas Práticas

### Princípios SOLID

O projeto segue os princípios SOLID para garantir código limpo e manutenível:

- **Single Responsibility**: Cada componente tem uma única responsabilidade
- **Open/Closed**: Componentes abertos para extensão, fechados para modificação
- **Liskov Substitution**: Componentes substituíveis sem quebrar a aplicação
- **Interface Segregation**: Interfaces pequenas e específicas
- **Dependency Inversion**: Dependência de abstrações, não implementações

### Estrutura de Componentes

- **Componentes Funcionais**: Uso exclusivo de componentes funcionais com Hooks
- **Props Tipadas**: Validação de props (preparado para TypeScript)
- **CSS Modular**: Cada componente possui seu próprio arquivo CSS
- **Separação de Dados**: Dados estáticos centralizados em `data/content.js`

### Responsabilidades por Camada

1. **Components**: Componentes reutilizáveis e de apresentação
2. **Pages**: Orquestração de componentes para formar páginas completas
3. **Data**: Gerenciamento de conteúdo estático
4. **Styles**: Estilização modular e variáveis CSS globais

## 📅 Roadmap

### Fase 1: Frontend Landing Page ✅ (Concluída)
- [x] Design system e componentes base
- [x] Página inicial completa
- [x] Responsividade mobile
- [x] Animações e interatividade

### Fase 2: Backend e API 🚧 (Em andamento)
- [ ] API REST com Node.js e Express
- [ ] Sistema de autenticação (JWT)
- [ ] Banco de dados MongoDB
- [ ] Endpoints para cursos e trilhas

### Fase 3: Funcionalidades Avançadas ⏳ (Planejado)
- [ ] Sistema de login e cadastro
- [ ] Dashboard do aluno
- [ ] Player de vídeo aulas
- [ ] Sistema de progresso e certificados
- [ ] Fórum da comunidade

### Fase 4: Deploy e CI/CD ⏳ (Planejado)
- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Deploy backend (Heroku/Railway)
- [ ] Pipeline CI/CD (GitHub Actions)
- [ ] Monitoramento e analytics

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga estes passos:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### Diretrizes de Contribuição

- Siga os padrões de código existentes
- Escreva mensagens de commit descritivas
- Adicione testes quando aplicável
- Atualize a documentação conforme necessário
- Certifique-se de que o código passa em todos os testes

## 📝 Convenções de Código

- **Componentes React**: PascalCase (`Header.js`, `Hero.js`)
- **Arquivos CSS**: PascalCase correspondente ao componente (`Header.css`)
- **Funções**: camelCase (`handleClick`, `processCode`)
- **Constantes**: UPPER_SNAKE_CASE para constantes globais
- **Indentação**: 2 espaços
- **Aspas**: Simples para JavaScript, duplas para JSX

## 🐛 Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/Armadura-Programada/issues) com:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. atual
- Screenshots (se aplicável)
- Ambiente (navegador, SO, versão do Node)

## 📄 Licença

Este projeto está licenciado sob os termos da **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

Desenvolvido com 💙 pela equipe Armadura Programada.

## 📧 Contato

- **Website**: [em breve]
- **Email**: contato@armadura-programada.com
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)

## 🌟 Agradecimentos

- Comunidade React pela excelente biblioteca
- Todos os contribuidores que dedicaram seu tempo
- Alunos que confiam na plataforma para seu aprendizado

---

<div align="center">

**⚔️ Construa sua armadura de conhecimento! ⚔️**

[Começar Agora](#-instalação-e-execução) • [Ver Demo](#) • [Reportar Bug](https://github.com/seu-usuario/Armadura-Programada/issues)

</div>
