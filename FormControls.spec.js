import {expect,test} from '@playwright/test'
import exp from 'constants'
test('FormTest',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveTitle('Automation Testing Practice')
    const InputField=await page.locator('input#name')
    await expect(InputField).toBeVisible()
    await expect.soft(InputField).toBeEditable() //softassertion
    await expect(InputField).toBeEnabled()
    await InputField.fill('Abhishek')
    const MaleRadioBtn=page.locator('input#male')
    MaleRadioBtn.check()
    await expect(MaleRadioBtn).toBeChecked()
    await expect(page.locator('input#female')).not.toBeChecked()
    const weekdays=await page.$$("input[type='checkbox'][class='form-check-input']")
    for(const day of weekdays)
    {
        const dayName=await day.getAttribute('value')
        if(dayName==='sunday'||dayName==='tuesday')
        {
            await day.check()
            await expect(await page.locator(`//input[@type='checkbox' and @value='${dayName}']`).isChecked()).toBeTruthy()
        }
        else{
            const xpathforWeekDay = `//input[@type='checkbox' and @value='${dayName}']`;
            await page.waitForSelector(xpathforWeekDay);
            const weekDay = await page.locator(xpathforWeekDay);
            await expect(weekDay).not.toBeChecked();
        }
    }

    await  page.waitForTimeout(5000)
    await page.close()
    

})