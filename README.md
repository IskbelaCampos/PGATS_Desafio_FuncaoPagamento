# PGATS Desafio Função Pagamento

Este repositório contém a implementação do serviço de pagamentos em Node.js e várias pipelines do GitHub Actions para validação (manual, agendada e por push).

**Como executar localmente**

- Instalar dependências:

```bash
npm install
```

- Executar testes:

```bash
npm test
```

**Visão geral das pipelines**

- `.github/workflows/manual-exec.yml` — workflow acionável manualmente (`workflow_dispatch`).
- `.github/workflows/scheduled-exec.yml` — workflow agendado via `schedule` (cron). Atenção: GitHub Actions usa UTC.
- `.github/workflows/push-exec.yaml` — workflow que dispara em `push` na branch `main`, gera dois relatórios de teste (HTML e JUnit XML) e publica os arquivos como artifact na execução.

**O que os workflows fazem (resumo)**

- Checkout do código (`actions/checkout`).
- Setup Node.js 20 (`actions/setup-node`).
- Instalação de dependências com `npm ci` (determinístico; usa `package-lock.json`).
- Job `lint`: executa `npm run lint` (ESLint) para inspeção de código.
- Job `test`: executa `npm test` (Mocha). No workflow de push, `test` depende de `lint` (`needs: lint`) para garantir que os testes só rodem se a inspeção passar.

**Por que `npm ci` no CI?**

- `npm ci` instala exatamente as versões travadas em `package-lock.json`, é mais rápido e determinístico para ambientes de CI/CD.
- Localmente use `npm install` para atualizar dependências e gerar/atualizar o `package-lock.json`.

**Sobre ESLint e Mocha**

- `mocha` está configurado como dependência de desenvolvimento (`devDependencies`) porque é usado apenas em testes.
- `eslint` é usado para inspeção de código no job `lint`. A configuração mínima está em `.eslintrc.json` e o script `lint` (`npm run lint`) varre `src` e `test`.

**Cron e fuso horário (Lisboa)**

- GitHub Actions cron sempre interpreta a expressão em UTC. Para agendar em hora local (Lisboa) considere converter para UTC ou criar lógica adicional.
- Exemplo: em horário de verão (UTC+1), para rodar às `12:45` em Lisboa, configure `cron: '45 11 * * 0'` (11:45 UTC).

**Executar/forçar um workflow no GitHub**

1. Ir para a aba `Actions` no repositório.
2. Selecionar o workflow desejado (ex.: `manual-exec`).
3. Clicar em `Run workflow` (se disponível) para executar manualmente.

**Comandos úteis**

```bash
# Instalar dependências localmente
npm install

# Executar lint localmente
npm run lint

# Executar testes
npm test
```

