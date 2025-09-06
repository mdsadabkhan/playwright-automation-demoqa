import test from '../app_common/fixtures/page.fixture'

test("@One Login case for Orange HRM",async ({page, loginPage})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await loginPage.enterUsername("Admin")
    await loginPage.enterPassword("admin123")      
    await loginPage.clickOnLoginButton()
    await page.pause()
})