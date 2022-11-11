// @ts-check
import { test, expect } from '@playwright/test';

test.describe('opens base route for red wines', () => {

  test('visit red wines route at wine.com', async ({ page }) => {
    await page.goto('https://www.wine.com/list/wine/red-wine/7155-124');

    await page.goto('https://www.wine.com/list/wine/red-wine/7155-124#promoBarModal');

    await page.getByRole('link', { name: 'close modal icon' }).click();
    await expect(page).toHaveURL('https://www.wine.com/list/wine/red-wine/7155-124#closePromoModal');

    await page.getByLabel('filter by Nested Region').check();

    await page.locator('.filterMenu_itemName:has-text("California")').click();
    await expect(page).toHaveURL('https://www.wine.com/list/wine/california/red-wine/7155-106870-124');

    const divCounts = await page.$$eval('.prodItem', (divs) => divs.length);
    expect(divCounts).toBeGreaterThan(0);
  });
});
