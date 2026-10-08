const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Funcionalidade de Login', () => {
  test('CT-001 - deve realizar login com credenciais válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      'usuario.qa@example.com',
      'Qa@123456'
    );

    // Adapte a URL/elemento esperado à aplicação real.
    await expect(page).toHaveURL(/dashboard|home/);
  });

  test('CT-002 - deve bloquear login com senha inválida', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      'usuario.qa@example.com',
      'SenhaInvalida123'
    );

    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('CT-005 - deve validar senha obrigatória', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.fillEmail('usuario.qa@example.com');
    await loginPage.submit();

    await expect(loginPage.passwordInput).toHaveAttribute('required', '');
  });
});
