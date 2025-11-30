# 📦 Instalação e Geração de Documentos

Este guia explica como gerar os arquivos XLSX e DOCX da documentação do projeto.

## Pré-requisitos

- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)

## Instalação das Dependências

### Windows
```bash
python -m pip install -r requirements.txt
```

### Linux/Mac
```bash
pip3 install -r requirements.txt
```

Ou instale individualmente:
```bash
pip install openpyxl python-docx
```

## Gerar Arquivos

### 1. Gerar Inventário XLSX

```bash
cd documentacao/ICs
python gerar_xlsx.py
```

Isso criará o arquivo `Inventario_ICs.xlsx` formatado profissionalmente.

### 2. Gerar Especificação DOCX

```bash
cd documentacao/Requisitos
python gerar_docx.py
```

Isso criará o arquivo `Especificacao_Requisitos.docx` completo.

## Alternativa: Usar CSV e Converter Manualmente

Se não tiver Python instalado:

1. **Para XLSX:**
   - Abra `documentacao/ICs/Inventario_ICs.csv` no Excel
   - Salve como `.xlsx`

2. **Para DOCX:**
   - Use um conversor online de Markdown para Word
   - Ou copie o conteúdo do script Python e adapte

## Verificação

Após executar os scripts, verifique se os arquivos foram criados:

- ✅ `documentacao/ICs/Inventario_ICs.xlsx`
- ✅ `documentacao/Requisitos/Especificacao_Requisitos.docx`

## Troubleshooting

### Erro: "pip não é reconhecido"
Use: `python -m pip install openpyxl python-docx`

### Erro: "python não é reconhecido"
Use: `py -m pip install openpyxl python-docx` (Windows)

### Erro de permissão
Use: `pip install --user openpyxl python-docx`

