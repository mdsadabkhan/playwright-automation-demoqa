import test from '../../app_common/fixtures/page.fixture'

test('@alerts To Verify the End To End flow For Alerts, Frames and Windows section', async ({page, homePage, alertsFramesAndWindowsTab }, testInfo) => {
    await test.step('1). Open the Application under Test and navigate to Alerts, Frames and Windows Section', async () => {
        await homePage.openDemoQAUrl()
        await homePage.openAlertsFramesAndWindowsTab()
    })
    await test.step('3.) Navigate to Browser Windows Tab', async () => {
        await alertsFramesAndWindowsTab.navigateToBrowserWindowTab()
    })
    await test.step('4.) Navigate to Alerts Tab', async () => {
        await alertsFramesAndWindowsTab.navigateToAlertsTab()
    })
    await test.step('5.) Navigate to Frames Tab', async () => {
        await alertsFramesAndWindowsTab.navigateToFramesTab()
    })
    await test.step('6.) Navigate to Nested Frames Tab', async () => {
        await alertsFramesAndWindowsTab.navigateToNestedFramesTab()
    })
    await test.step('7.) Navigate to Modal Dialogs Tab', async () => {
        await alertsFramesAndWindowsTab.navigateToModalDialogsTab()
    })  
})