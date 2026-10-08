# Postman

## Importação

No Postman:

1. Clique em **Import**.
2. Selecione `Login-API-Collection.json`.
3. Configure `baseUrl`.
4. Execute a collection.

## Variáveis

| Variável | Exemplo |
|---|---|
| baseUrl | https://api.example.com |
| email | usuario.qa@example.com |
| password | Qa@123456 |

## Validações

A collection verifica:

- HTTP 200 para login válido;
- token na resposta;
- HTTP 401/403 para credenciais inválidas;
- HTTP 400/422 para dados obrigatórios ausentes;
- tempo de resposta.
