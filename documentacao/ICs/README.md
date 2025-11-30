# Inventário de Itens de Configuração (ICs)

Esta pasta contém o inventário completo de todos os Itens de Configuração do projeto Armadura Programada.

## Arquivos Disponíveis

- **Inventario_ICs.csv** - Planilha em formato CSV (compatível com Excel, Google Sheets, etc.)
- **Inventario_ICs.xlsx** - Planilha em formato Excel nativo (gerado automaticamente)

## Como Gerar o Arquivo XLSX

### Opção 1: Usando Python (Recomendado)

1. Instale a biblioteca openpyxl:
   ```bash
   pip install openpyxl
   ```

2. Execute o script:
   ```bash
   python gerar_xlsx.py
   ```

### Opção 2: Usando Excel/Google Sheets

1. Abra o arquivo `Inventario_ICs.csv` no Excel ou Google Sheets
2. Salve como `.xlsx` (Excel) ou `.xls` (Excel antigo)

### Opção 3: Conversão Online

Use ferramentas online como:
- [ConvertCSV.com](https://www.convertcsv.com/csv-to-xlsx.htm)
- [CloudConvert](https://cloudconvert.com/csv-to-xlsx)

## Estrutura do Inventário

O inventário contém as seguintes colunas:

| Coluna | Descrição |
|--------|-----------|
| **ID do IC** | Identificador único do item (ex: IC-DOC01, IC-COD01) |
| **Nome** | Nome descritivo do item |
| **Tipo** | Categoria do item (Documento, Código Fonte, Arquivo de Configuração, etc.) |
| **Versão** | Versão atual do item |
| **Responsável** | Papel responsável pelo item |
| **Localização** | URL completa do arquivo no GitHub |

## Convenções de ID

- **IC-DOC##**: Documentos (PP, DR, ERS, etc.)
- **IC-COD##**: Arquivos de código fonte
- **IC-CFG##**: Arquivos de configuração

## Atualização do Inventário

Para adicionar novos itens:

1. Edite o arquivo `Inventario_ICs.csv`
2. Adicione uma nova linha seguindo o padrão existente
3. Execute `gerar_xlsx.py` para atualizar o arquivo XLSX
4. Faça commit das alterações no Git

## Links Úteis

- [Documentação Principal](../../README.md)
- [Especificação de Requisitos](../Requisitos/Especificacao_Requisitos.docx)

