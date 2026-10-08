# BUG-001 — Login aceita senha incorreta

## Resumo

A aplicação permite autenticação mesmo quando a senha informada é incorreta.

## Severidade

**Alta**

## Prioridade

**Alta**

## Ambiente

- Ambiente: QA/Homologação
- Navegador: Chrome
- Sistema operacional: Windows
- Funcionalidade: Login

## Pré-condições

- Usuário cadastrado.
- Senha correta conhecida.

## Passos para reprodução

1. Acessar a tela de login.
2. Informar um e-mail válido.
3. Informar uma senha incorreta.
4. Clicar em **Entrar**.

## Resultado esperado

O sistema deve negar o acesso e apresentar uma mensagem informando que as credenciais são inválidas.

## Resultado atual

O sistema permite que o usuário avance para a área autenticada mesmo utilizando uma senha incorreta.

## Impacto

O defeito pode comprometer diretamente a autenticação e permitir acesso indevido a contas.

## Frequência

**100% reproduzível** no cenário descrito.

## Evidência

Adicionar screenshot ou vídeo da reprodução em:

```text
evidence/bug-001.png
```

## Status

**Aberto**

## Recomendação

Revisar a validação das credenciais no backend e garantir que a senha recebida seja validada antes da criação da sessão/token.

## Observação

Este é um exemplo de bug para demonstração de processo de QA. Em um ambiente real, o comportamento deve ser confirmado antes de registrar o defeito.
