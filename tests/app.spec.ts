import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Vite + React + TS');

  const button = page.getByRole('button', { name: 'count is' });

  // Expect an element "to be visible".
  await expect(button).toBeVisible();

  // Expect an element "to have text" content.
  await expect(button).toHaveText('count is 0');

  // Click an element.
  await button.click();

  // Expect an element "to have text" content.
  await expect(button).toHaveText('count is 1');

  await button.click();
  await button.click();
  await button.click();

  await expect(button).toHaveText('count is 4');
});
