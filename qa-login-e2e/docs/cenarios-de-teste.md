# Cenários de Teste — Login

## CT-001 — Login com credenciais válidas

**Pré-condição:** usuário cadastrado.

**Passos:**
1. Acessar a tela de login.
2. Informar e-mail válido.
3. Informar senha válida.
4. Clicar em Entrar.

**Resultado esperado:** usuário autenticado e redirecionado para a área logada.

---

## CT-002 — Login com senha inválida

**Passos:**
1. Informar e-mail válido.
2. Informar senha incorreta.
3. Clicar em Entrar.

**Resultado esperado:** acesso negado e mensagem de erro exibida.

---

## CT-003 — Login com usuário inexistente

**Passos:**
1. Informar e-mail não cadastrado.
2. Informar senha.
3. Clicar em Entrar.

**Resultado esperado:** acesso negado.

---

## CT-004 — E-mail vazio

**Passos:**
1. Deixar o e-mail vazio.
2. Informar senha.
3. Clicar em Entrar.

**Resultado esperado:** validação informando que o e-mail é obrigatório.

---

## CT-005 — Senha vazia

**Passos:**
1. Informar e-mail.
2. Deixar senha vazia.
3. Clicar em Entrar.

**Resultado esperado:** validação informando que a senha é obrigatória.

---

## CT-006 — E-mail em formato inválido

**Dados:**

```text
usuario-sem-formato
```

**Resultado esperado:** sistema informa formato de e-mail inválido.

---

## CT-007 — Campos preenchidos com espaços

**Resultado esperado:** sistema deve tratar espaços conforme a regra de negócio e não permitir autenticação indevida.

---

## CT-008 — API com credenciais válidas

**Resultado esperado:**
- HTTP 200;
- token retornado;
- corpo da resposta conforme contrato.

---

## CT-009 — API com credenciais inválidas

**Resultado esperado:**
- HTTP 401 ou 403, conforme contrato;
- nenhuma sessão/token válido deve ser criado.

---

## CT-010 — Performance do login

**Resultado esperado:**
- p95 inferior a 1000 ms;
- taxa de erro inferior a 1%.
