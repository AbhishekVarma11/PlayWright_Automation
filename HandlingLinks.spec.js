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
    await page.waitForSelector('#logInModal', { state: 'hidden' });
    await page.waitForSelector("//div[@class='card-block']/h4/a")
    const itemLinks=await page.$$("xpath=//div[@class='card-block']/h4/a")
    for(const link of itemLinks)
    {
        const item= await link.textContent();
        if(item==="Nexus 6")
        {
            console.log("Nexus 6 available in the store")
            await link.click()
            break
        }  
    }
    const product=await page.locator("xpath=//*[text()='Nexus 6']")
    await expect(product).toBeVisible()
    const price=await page.locator("xpath=//h3[@class='price-container']").textContent()
    console.log(price)
    await page.locator("id=logout2").click()
    

    await page.close()
})