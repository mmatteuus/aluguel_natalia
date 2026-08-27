import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('core journey loads, shows the photo gallery and has no serious accessibility violations', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Sobrado para Alugar/i);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Seu novo lar');

  const hero = page.locator('#inicio');
  await hero.getByRole('link', { name: 'Ver fotos' }).click();
  await expect(page).toHaveURL(/#galeria$/);
  await expect(page.locator('#galeria')).toBeVisible();

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

test('desktop gallery renders consistent 3:4 cards without squeeze or overflow across viewports', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name.includes('mobile'), 'desktop-only assertion');

  const viewports = [
    { width: 1024, height: 768 },
    { width: 1280, height: 800 },
    { width: 1440, height: 900 }
  ];

  for (const vp of viewports) {
    await page.setViewportSize(vp);
    await page.goto('/#galeria');
    await expect(page.locator('#galeria')).toBeVisible();

    const cards = page.locator('.gallery-card');
    await expect(cards).toHaveCount(12);

    const tiles = page.locator('.gallery-tile');
    await expect(tiles).toHaveCount(12);

    for (let i = 0; i < 12; i++) {
      const box = await tiles.nth(i).boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        // Confirm no cards are compressed/squeezed to ~80-169px
        expect(box.width).toBeGreaterThanOrEqual(250);
        // Confirm 3:4 aspect ratio (width / height approx 0.75 +/- 0.05)
        const ratio = box.width / box.height;
        expect(ratio).toBeGreaterThan(0.7);
        expect(ratio).toBeLessThan(0.8);
      }
    }

    // Verify no horizontal overflow in document
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  }
});
