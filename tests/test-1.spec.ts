import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
});await page.getByRole('link', { name: 'Checkboxes' }).click();
await page.getByRole('checkbox').first().check();
await page.getByRole('checkbox').nth(1).uncheck();
await expect(page.getByRole('checkbox').first()).toBeChecked();
await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();