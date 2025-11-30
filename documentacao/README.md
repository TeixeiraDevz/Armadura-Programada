# 📚 Documentação do Projeto Armadura Programada

Bem-vindo à documentação completa do projeto Armadura Programada. Esta pasta contém todos os documentos de engenharia de software, requisitos, diagramas e itens de configuração do projeto.

## 📁 Estrutura da Documentação

```
documentacao/
├── ICs/                                    # Itens de Configuração
│   ├── Inventario_ICs.csv                 # Planilha CSV com inventário completo
│   ├── Inventario_ICs.xlsx                # Planilha Excel formatada
│   ├── gerar_xlsx.py                      # Script para gerar XLSX
│   └── README.md                          # Documentação dos ICs
│
├── Requisitos/                             # Documentos de Requisitos
│   ├── Especificacao_Requisitos.docx      # Especificação completa de requisitos
│   ├── gerar_docx.py                      # Script para gerar DOCX
│   └── Matriz_Rastreabilidade.xlsx        # Matriz de rastreabilidade (futuro)
│
├── Diagramas/                              # Diagramas e Modelos
│   └── (diagramas futuros)
│
└── README.md                               # Este arquivo
```

## 📋 Documentos Disponíveis

### 1. Inventário de Itens de Configuração (ICs)

**Localização:** `ICs/`

O inventário de ICs contém o mapeamento completo de todos os arquivos, documentos e componentes do projeto, incluindo:

- Documentos de projeto (PP, DR, ERS)
- Arquivos de código fonte
- Arquivos de configuração
- Documentação técnica

**Arquivos:**
- `Inventario_ICs.csv` - Versão CSV (fácil de versionar no Git)
- `Inventario_ICs.xlsx` - Versão Excel (formatação profissional)

**Como usar:**
1. Abra o arquivo CSV ou XLSX
2. Filtre por tipo, responsável ou versão
3. Use os links de localização para acessar diretamente os arquivos no GitHub

### 2. Especificação de Requisitos de Software (ERS)

**Localização:** `Requisitos/`

Documento completo contendo:

- **Seção 1:** Introdução e objetivos
- **Seção 2:** Descrição geral do sistema
- **Seção 3:** Especificação detalhada de requisitos
  - 3.1 Identificação de Subsistemas
  - 3.2 Modelo de Caso de Uso
  - 3.3 Diagramas de Classes
  - 3.4 Modelo Estrutural (ERD)
  - 3.5 Tabela de Necessidades (N001-N014)
- **Seção 4:** Requisitos não funcionais
- **Seção 5:** Glossário

**Arquivo:** `Especificacao_Requisitos.docx`

## 🚀 Como Gerar os Arquivos

### Gerar Inventário XLSX

```bash
cd documentacao/ICs
pip install openpyxl
python gerar_xlsx.py
```

### Gerar Especificação DOCX

```bash
cd documentacao/Requisitos
pip install python-docx
python gerar_docx.py
```

## 📥 Download dos Arquivos

Todos os arquivos podem ser baixados diretamente do GitHub:

### Inventário de ICs
- [CSV](ICs/Inventario_ICs.csv) - Clique com botão direito > "Salvar link como..."
- [XLSX](ICs/Inventario_ICs.xlsx) - Clique com botão direito > "Salvar link como..."

### Especificação de Requisitos
- [DOCX](Requisitos/Especificacao_Requisitos.docx) - Clique com botão direito > "Salvar link como..."

## 📊 Subsistemas do Projeto

O sistema Armadura Programada é composto por 7 subsistemas principais:

1. **Gerenciamento de Usuários** - Autenticação e autorização
2. **Cadastro de Clientes** - Gestão de dados de clientes
3. **Módulo de IA** - Análise e scoring
4. **Relatórios e Métricas** - Dashboards e relatórios
5. **Gerenciamento de Documentos** - Upload e validação
6. **Auditoria e Conformidade** - Logs e rastreabilidade
7. **Infraestrutura e Configuração** - Ambientes e deployments

## 🎯 Necessidades do Sistema (N001-N014)

O projeto contempla 14 necessidades principais:

- **N001-N005:** Infraestrutura e segurança (Plataforma modular, login seguro, escalabilidade, registro, multiplataforma)
- **N006-N011:** Funcionalidades educacionais (Visualização de conteúdo, avaliação, ranking, notificações, fórum, recompensas)
- **N012-N014:** Integrações e conteúdo (Ferramentas externas, perfil, blog)

## 📝 Convenções de Versionamento

- **Documentos:** Versão 1.0, 1.1, 2.0, etc.
- **Código:** Seguir semântica de versionamento (MAJOR.MINOR.PATCH)
- **ICs:** Atualizar versão quando houver mudanças significativas

## 👥 Responsáveis

- **Gerente de Projeto:** Documentos gerais e planejamento
- **Product Owner:** Requisitos e necessidades
- **Arquiteto de Software:** Arquitetura e modelos
- **Gerente de Configuração:** ICs e controle de versão
- **Desenvolvedores:** Código fonte e implementação

## 🔗 Links Úteis

- [README Principal do Projeto](../README.md)
- [Frontend README](../frontend-app/README.md)
- [Backend README](../backend/README.MD)
- [LICENSE](../LICENSE)

## 📞 Contato

Para dúvidas sobre a documentação, abra uma [issue](https://github.com/[usuario]/Armadura-Programada/issues) no repositório.

---

**Última atualização:** 2025  
**Versão da Documentação:** 1.0

