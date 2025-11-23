import {test , expect} from "@playwright/test"

test.describe.configure({mode: 'parallel'})
test("To veify the interaction for windows", async ({page})=> {
    await page.goto("https://demoqa.com/")
    await expect(page).toHaveTitle('DEMOQA')
    await page.locator('div.top-card:nth-child(3)').click()
    await page.locator('div.element-list.collapse.show li#item-0').click()
    await expect(page).toHaveURL('https://demoqa.com/browser-windows')
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('button#tabButton').click()
    ])
    console.log('The new tab URL is:', newTab.url());
    expect(newTab.url()).toBe('https://demoqa.com/sample')
    await expect(newTab).toHaveScreenshot('NewTab.png')
    await newTab.close()
    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('button[id="windowButton"]').click()
    ])
    await expect(newWindow).toHaveScreenshot('NewWindow.png')
    await page.bringToFront()
    const [newWindowwithMessage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#messageWindowButton').click()
    ])
    await expect(newWindowwithMessage.locator('body')).toHaveText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.' )
    await expect(newWindowwithMessage).toHaveScreenshot('NewWindowMessage.png')
    await page.bringToFront()
})
// Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.

test("To verify the frames in the Alert section", async ({page})=> {
    await page.goto("https://demoqa.com/")
    await page.locator('div.top-card:nth-child(3)').click()
    await page.locator('div.element-list.collapse.show li#item-1').click()
    page.once('dialog', async dialog =>{
        expect(dialog.message()).toBe('You clicked a button')
        await dialog.accept()
    })
    await page.locator('button#alertButton').click()
    page.once('dialog', async dialog =>{
        expect(dialog.message()).toBe('This alert appeared after 5 seconds')
        await dialog.accept()
    })
    await page.locator('button#timerAlertButton').click()
    await page.waitForTimeout(6000)
    page.once('dialog', async dialog =>{
        expect(dialog.message()).toBe('Do you confirm action?')
        await dialog.dismiss()
    })
    await page.locator('button#confirmButton').click()
    const confirmResult = page.locator('#confirmResult')
    await expect(confirmResult).toHaveText('You selected Cancel')
    page.once('dialog', async dialog =>{
        expect(dialog.message()).toBe('Please enter your name')
        await dialog.accept('User is Sadab')
    })
    await page.locator('button#promtButton').click()
    await expect(page.locator('#promptResult')).toHaveText('You entered User is Sadab')  
    
})