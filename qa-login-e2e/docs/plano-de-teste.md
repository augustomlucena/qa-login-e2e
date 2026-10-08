# Plano de Teste — Funcionalidade de Login

## 1. Objetivo

Validar se a funcionalidade de login permite que usuários autenticados acessem o sistema corretamente e impede acessos utilizando credenciais inválidas ou dados incompletos.

## 2. Escopo

### Funcionalidades

- Autenticação com e-mail e senha.
- Validação de campos.
- Mensagens de erro.
- Redirecionamento após autenticação.
- API de autenticação.
- Performance da API de login.

## 3. Fora do escopo

- Cadastro.
- Recuperação de senha.
- MFA/2FA.
- Administração de usuários.
- Segurança ofensiva/penetration testing.

## 4. Estratégia

Serão utilizados testes:

- funcionais;
- positivos;
- negativos;
- exploratórios;
- E2E automatizados;
- API;
- performance.

## 5. Ambiente

| Item | Configuração |
|---|---|
| Sistema operacional | Windows/Linux/macOS |
| Navegadores | Chromium e Firefox |
| Automação | Playwright |
| API | Postman |
| Performance | k6 |
| Linguagem | JavaScript |
| Versionamento | Git/GitHub |

## 6. Critérios de entrada

- Aplicação disponível.
- Endpoint de login disponível.
- Usuário de teste criado.
- Ambiente acessível.

## 7. Critérios de saída

- Cenários críticos executados.
- Bugs críticos documentados.
- Automação executada.
- Collection API validada.
- Teste de performance executado.
- Resultados registrados.

## 8. Riscos

| Risco | Impacto | Mitigação |
|---|---|---|
| Ambiente indisponível | Alto | Validar ambiente antes dos testes |
| Dados de teste inválidos | Médio | Criar massa controlada |
| Mudança de seletores | Médio | Usar seletores estáveis |
| API instável | Alto | Validar endpoint antes do teste de carga |

## 9. Massa de teste

### Usuário válido

```text
email: usuario.qa@example.com
password: Qa@123456
```

### Usuário inválido

```text
email: usuario.inexistente@example.com
password: SenhaInvalida123
```

> Os dados acima são fictícios e devem ser substituídos pelos dados do ambiente de testes.

## 10. Critérios de qualidade

A funcionalidade será considerada aprovada quando:

- usuários válidos conseguirem autenticar;
- usuários inválidos forem bloqueados;
- campos obrigatórios forem validados;
- API retornar códigos HTTP coerentes;
- automação do fluxo crítico passar;
- teste de performance atingir os thresholds definidos.

## 11. Evidências

As execuções devem gerar:

- screenshots;
- relatório Playwright;
- resultados Postman;
- resultado k6;
- registros de bugs.
