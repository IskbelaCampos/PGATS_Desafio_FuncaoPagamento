# PGATS Desafio Função Pagamento

Este repositório contém a implementação de uma função para um serviço de pagamentos em Node.js e uma pipeline manual do GitHub Actions para instalação de dependências e execução de testes.

## Como executar localmente

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes:

```bash
npm test
```

## Pipeline do GitHub Actions

A pipeline está configurada em `.github/workflows/manual-exec.yml` e usa o evento manual `workflow_dispatch`.

### O que a pipeline faz

- Faz checkout do código
- Configura Node.js 20
- Instala dependências com `npm ci`
- Executa `npm test`

## Executar a pipeline manualmente no GitHub

1. Acesse o repositório no GitHub.
2. Clique na aba `Actions`.
3. Selecione o workflow `manual-exec`.
4. Clique em `Run workflow`.
5. Confirme a execução.

## Scripts disponíveis

- `npm test`: executa os testes usando Mocha.
