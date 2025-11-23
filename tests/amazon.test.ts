import { test, expect } from '@playwright/test';

test("@basic To Automate the basic amazon flow", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('input[id="twotabsearchtextbox"]').fill('Samsung S24 Ultra 512 GB')
    await page.locator('.nav-search-submit-text').click()
    // page.pause()
    const links = await page.getByRole('link').allTextContents()
    console.log('The Links are:',links)
    await page.waitForTimeout(10000)
    await page.locator('text=Samsung Galaxy S24 Ultra 5G AI Smartphone with Galaxy AI (Titanium Gray, 12GB, 512GB Storage)').click()
    await page.waitForLoadState()
    await page.pause()
    await page.getByRole('button', { name: 'Add to Cart' }).click()
    await page.locator('span[id="sw-gtc"]').click()
    const itemPrice = await page.locator('#sc-subtotal-amount-buybox').textContent()
    console.log('The Price of item is:',itemPrice)
    await page.locator('input[name="proceedToRetailCheckout"]').click()
    await page.locator('input[id="ap_email_login"]').fill('citovi4079@mirarmax.com')
    await page.locator('.a-button-input').click()
    const createAccountMessage = await page.locator('p.a-spacing-none').textContent()
    console.log('The further step is mentioned as:', createAccountMessage)


});