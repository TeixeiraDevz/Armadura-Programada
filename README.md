# Armadura — Trilhas de Aprendizado e Exercícios para Iniciantes

Projeto voltado a ajudar programadores iniciantes com trilhas de aprendizado e exercícios práticos.

## Visão Geral

- **Frontend**: React 18 (Create React App) com design simples e componentes reutilizáveis.
- **Backend**: placeholder (ainda não implementado).

## Estrutura de Pastas

```
/frontend-app   # Aplicação React
/backend        # Espaço reservado para API/servidor (vazio)
```

## Requisitos

- Node.js 18+ e npm 9+

## Como executar o Frontend

```bash
cd frontend-app
npm install
npm start
```

A aplicação inicia em `http://localhost:3000/`.

## Estado atual e observações

- Foi adicionada a dependência `react-router-dom` e configurado roteamento básico.
- CSS inválido em `src/pages/HomePage.css` foi corrigido (regras aninhadas removidas).
- O arquivo `backend/` é apenas um espaço reservado; não há servidor configurado ainda.
- Há um `package.json` na raiz com dependências não utilizadas. Recomenda-se removê-lo para evitar confusão, e trabalhar dentro de `frontend-app/` até o backend existir.

## Próximos passos sugeridos (Roadmap)

- Implementar backend (Node.js + Express) com endpoints para:
  - Trilhas de aprendizado (listar, detalhes)
  - Exercícios (CRUD, níveis, tags)
  - Autenticação simples (registro/login) e progresso de usuário
- Integrar o frontend ao backend (fetch/axios, estados de loading/erro)
- Adicionar testes (Jest/React Testing Library no frontend; Jest/Supertest no backend)
- Configurar CI/CD e deploy (Vercel/Netlify para frontend; Railway/Render para backend)

## Scripts úteis (frontend)

- `npm start` — roda em modo desenvolvimento
- `npm build` — cria build de produção
- `npm test` — executa testes

## Contribuindo

Pull Requests são bem-vindos. Sugestões de trilhas e exercícios também!

---

Feito com ❤️ para a comunidade de devs iniciantes.

