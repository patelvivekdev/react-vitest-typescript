import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Vite + React + TS');

  const countBtn = page.getByTestId('increment');

  // Expect an element "to be visible".
  await expect(countBtn).toBeVisible();

  // Expect an element "to have text" content.
  await expect(countBtn).toHaveText('count is 0');

  // Click an element.
  await countBtn.click();

  // Expect an element "to have text" content.
  await expect(countBtn).toHaveText('count is 1');

  await countBtn.click();
  await countBtn.click();
  await countBtn.click();

  await expect(countBtn).toHaveText('count is 4');

  const user1Btn = page.getByTestId('user-1');
  await user1Btn.click();

  await expect(page.getByTestId('user')).toHaveText('Leanne Graham');

  const user2Btn = page.getByTestId('user-2');
  await user2Btn.click();

  await expect(page.getByTestId('user')).toHaveText('Ervin Howell');
});
