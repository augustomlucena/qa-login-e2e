# Performance — k6

## Execução

```bash
k6 run performance/login-performance.js
```

Com URL personalizada:

```bash
k6 run -e BASE_URL=https://sua-api.com performance/login-performance.js
```

## Cenário

10 VUs durante 30 segundos.

## Thresholds

```text
p95 < 1000ms
taxa de erro < 1%
checks > 99%
```

## O que analisar

Após a execução, observar:

- `http_req_duration`;
- `http_req_failed`;
- `checks`;
- número de requisições;
- p95;
- média;
- máximo;
- erros.

Um resultado aprovado deve atender aos thresholds configurados.
