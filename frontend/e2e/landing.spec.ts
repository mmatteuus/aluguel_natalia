import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('core journey loads, starts the tour and has no serious accessibility violations', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Sobrado para Alugar/i);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Seu novo lar');

  const hero = page.getByLabel('Seu novo lar espera por voc\u00EA');
  await hero.getByRole('link', { name: 'Entrar no im\u00EDvel' }).click();
  await expect(page).toHaveURL(/#tour$/);
  await expect(page.locator('#tour')).toBeVisible();

  await page.locator('#quartos').scrollIntoViewIfNeeded();
  await expect(page.getByRole('heading', { name: 'Quartos' })).toBeVisible();

  const scan = await new AxeBuilder({ page }).analyze();
  const blocking = scan.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact ?? ''));
  expect(blocking).toEqual([]);
});

test('mobile navigation and contact bar stay available', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'mobile-only assertion');
  await page.goto('/');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await expect(page.getByRole('navigation', { name: 'Principal' })).toBeVisible();
  await expect(page.getByRole('link', { name: /WhatsApp/i }).last()).toBeVisible();
});