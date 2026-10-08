# QA Login E2E — Projeto de Qualidade de Software

Projeto de portfólio QA cobrindo uma única funcionalidade de ponta a ponta: **Login**.

O projeto demonstra planejamento, testes manuais, reporte de bugs, automação E2E com Playwright e Page Object Model, testes de API com Postman e teste de performance com k6.

## 🎯 Objetivo

Validar a funcionalidade de autenticação de uma aplicação web/API considerando:

- comportamento funcional;
- validações de campos;
- cenários positivos e negativos;
- automação E2E;
- validação de API;
- identificação e documentação de defeitos;
- comportamento sob carga.

## 🧰 Tecnologias

- **Playwright** — automação E2E
- **JavaScript / Node.js**
- **Postman** — testes de API
- **k6** — testes de performance
- **Git / GitHub**
- **Markdown**

## 📁 Estrutura

```text
qa-login-e2e/
├── README.md
├── package.json
├── playwright.config.js
├── .gitignore
├── docs/
│   ├── plano-de-teste.md
│   ├── cenarios-de-teste.md
│   └── bug-report.md
├── automation/
│   ├── pages/
│   │   └── LoginPage.js
│   └── tests/
│       └── login.spec.js
├── postman/
│   └── Login-API-Collection.json
└── performance/
    └── login-performance.js
```

## 🔄 Fluxo de QA

```text
Requisito
   ↓
Plano de Teste
   ↓
Cenários
   ↓
Testes Manuais
   ↓
Bug Report
   ↓
Automação E2E
   ↓
Testes de API
   ↓
Teste de Performance
   ↓
Análise dos resultados
```

## 🧪 Escopo

### Dentro do escopo

- Login com credenciais válidas.
- Login com senha inválida.
- Login com usuário inexistente.
- Validação de campos obrigatórios.
- Validação de formato de e-mail.
- Validação da API de autenticação.
- Automação do fluxo principal.
- Teste de carga da API de login.

### Fora do escopo

- Cadastro de usuários.
- Recuperação de senha.
- MFA/2FA.
- Testes de segurança aprofundados.
- Testes de banco de dados.

## ▶️ Como executar a automação

### 1. Instalar dependências

```bash
npm install
npx playwright install
```

### 2. Configurar a URL

Por padrão, o projeto utiliza:

```text
https://example.com/login
```

Altere a variável `BASE_URL` conforme a aplicação que será testada.

No Windows PowerShell:

```powershell
$env:BASE_URL="https://sua-aplicacao.com"
```

No Linux/macOS:

```bash
BASE_URL=https://sua-aplicacao.com
```

### 3. Executar os testes

```bash
npm test
```

Ou:

```bash
npm run test:headed
```

Para visualizar o relatório:

```bash
npm run report
```

> Os seletores usados em `LoginPage.js` são exemplos genéricos. Adapte-os à aplicação real.

## 📮 Postman

Importe:

```text
postman/Login-API-Collection.json
```

A collection possui variáveis para:

- `baseUrl`
- `email`
- `password`

A collection valida:

- status HTTP;
- tempo de resposta;
- existência do token;
- comportamento de credenciais inválidas;
- campos obrigatórios.

## ⚡ Performance com k6

Executar:

```bash
k6 run performance/login-performance.js
```

Cenário:

- 10 usuários virtuais;
- 30 segundos;
- validação de status;
- validação de tempo de resposta;
- threshold de p95 abaixo de 1000 ms;
- taxa de erro abaixo de 1%.

Exemplo de critérios:

```text
http_req_duration p(95) < 1000ms
http_req_failed rate < 1%
```

## 🐞 Bug Report

O projeto contém um exemplo de bug documentado em:

```text
docs/bug-report.md
```

O relatório apresenta:

- título;
- severidade;
- prioridade;
- ambiente;
- pré-condições;
- passos para reprodução;
- resultado esperado;
- resultado atual;
- impacto;
- evidência.

## 📊 Critérios de aprovação

| Área | Critério |
|---|---|
| E2E | Fluxos críticos passam |
| API | Respostas atendem aos contratos esperados |
| Performance | p95 < 1000 ms |
| Performance | Erros < 1% |
| Documentação | Cenários e defeitos documentados |

## 👨‍💻 Autor

**José Augusto Monteiro de Lucena**

Projeto desenvolvido para portfólio profissional em **QA / Qualidade de Software**.

Tecnologias e conhecimentos demonstrados:

`Testes Manuais` `Testes E2E` `Playwright` `Page Object Model` `API Testing` `Postman` `k6` `JavaScript` `Git` `GitHub`
