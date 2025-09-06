import { test, expect } from '@playwright/test';

test.skip("@basic To sort the elements in the table", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables")
    const tableContent = await page.locator('td.last-name').allTextContents()
    console.log(tableContent)

    

});