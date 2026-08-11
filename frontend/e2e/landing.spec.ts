import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('core journey loads, starts the tour and has no serious accessibility violations', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Sobrado para Alugar/i);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Seu novo lar');

  const hero = page.getByLabel('Seu novo lar espera por você');
  await hero.getByRole('link', { name: 'Entrar no imóvel' }).click();
  await expect(page).toHaveURL(/#tour$/);
  await expect(page.locator('#tour')).toBeVisible();

  await page.locator('#quartos').scrollIntoViewIfNeeded();
  await expect(page.getByRole('heading', { name: 'Quartos' })).toBeVisible();

  const scan = await new AxeBuilder({ page }).analyze();
  const blocking = scan.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact ?? ''));
  expect(blocking).toEqual([]);
});

test('mobile navigation moves focus into the menu and returns it on Escape', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'mobile-only assertion');
  await page.goto('/');

  const toggle = page.getByRole('button', { name: 'Abrir menu' });
  await toggle.click();

  const nav = page.getByRole('navigation', { name: 'Principal' });
  const firstLink = nav.getByRole('link', { name: 'Início' });
  await expect(nav).toBeVisible();
  await expect(firstLink).toBeFocused();

  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeFocused();
  await expect(page.getByRole('link', { name: /WhatsApp/i }).last()).toBeVisible();
});

test('tour rail stays below the fixed header while scrolling', async ({ page }) => {
  await page.goto('/');
  await page.locator('#tour').scrollIntoViewIfNeeded();
  await page.waitForTimeout(100);

  const headerBox = await page.locator('.site-header').boundingBox();
  const railBox = await page.locator('.tour__rail').boundingBox();

  expect(headerBox).not.toBeNull();
  expect(railBox).not.toBeNull();
  expect(railBox!.y).toBeGreaterThanOrEqual(headerBox!.height - 2);
});

test('reduced motion keeps secondary room photographs visible without animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.locator('#quartos').scrollIntoViewIfNeeded();

  const secondaryBedroom = page.locator('#quartos .tour-scene__frame').nth(1);
  const secondaryBathroom = page.locator('#banheiro .tour-scene__frame').nth(1);

  await expect(secondaryBedroom).toBeVisible();
  await expect(secondaryBathroom).toBeVisible();
  await expect(secondaryBedroom).toHaveCSS('opacity', '1');
  await expect(secondaryBathroom).toHaveCSS('opacity', '1');
});
