import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('core journey loads, shows the photo gallery and has no serious accessibility violations', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Sobrado para Alugar/i);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Seu novo lar');

  const hero = page.getByLabel('Seu novo lar espera por você');
  await hero.getByRole('link', { name: 'Ver fotos' }).click();
  await expect(page).toHaveURL(/#galeria$/);
  await expect(page.locator('#galeria')).toBeVisible();

  await page.locator('#quartos').scrollIntoViewIfNeeded();
  await expect(page.locator('#quartos').getByRole('heading', { name: 'Quartos' })).toBeVisible();

  await page.getByRole('button', { name: 'Hall de entrada do sobrado' }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText('1 / 12');
  await page.keyboard.press('ArrowRight');
  await expect(dialog).toContainText('2 / 12');
  await dialog.getByRole('button', { name: 'Fechar galeria' }).click();
  await expect(dialog).not.toBeVisible();

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