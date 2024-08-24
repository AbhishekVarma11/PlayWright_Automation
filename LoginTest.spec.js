import {test,expect} from  '@playwright/test'
import exp from 'constants'
test('Login Test',async({page})=>
{
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveTitle('STORE')
    await page.click('id=login2')
    await page.locator("input[id='loginusername']").fill("admin")
    await page.fill('input#loginpassword','admin')
    await page.click("//button[text()='Log in']")
    const logoutBtn=await page.locator("id=logout2")
    await expect(logoutBtn).toBeVisible()
    await page.locator("id=logout2").click()
    await expect(page).toHaveTitle('STORE')
    await page.close()

})