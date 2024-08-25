import { test, expect } from '@playwright/test';
//generate the code using the codegen by record the actions
// npx playwright codegen
test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s7' }).click();
  const productName=await page.locator("xpath=//h2[text()='Samsung galaxy s7']").textContent()
  console.log(productName)
  await expect(productName).toEqual("Samsung galaxy s7")
  await page.getByRole('link', { name: 'Log out' }).click();
});