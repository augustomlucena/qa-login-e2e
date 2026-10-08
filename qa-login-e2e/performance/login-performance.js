import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    login_load_test: {
      executor: 'constant-vus',
      vus: 10,
      duration: '30s',
    },
  },

  thresholds: {
    http_req_duration: ['p(95)<1000'],
    http_req_failed: ['rate<0.01'],
    checks: ['rate>0.99'],
  },
};

const BASE_URL = __ENV.BASE_URL || 'https://api.example.com';

export default function () {
  const payload = JSON.stringify({
    email: 'usuario.qa@example.com',
    password: 'Qa@123456',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    tags: {
      endpoint: 'login',
    },
  };

  const response = http.post(`${BASE_URL}/login`, payload, params);

  check(response, {
    'status HTTP esperado': (r) => r.status === 200,
    'tempo de resposta < 1000ms': (r) => r.timings.duration < 1000,
  });

  sleep(1);
}
