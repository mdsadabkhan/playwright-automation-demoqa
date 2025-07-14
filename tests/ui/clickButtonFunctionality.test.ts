import test from '../../app_common/hooks'


test('To verify the functionality of the click button', async ({ page, utils, homePage, elementsPage, buttonsPage }, testInfo) => {
    await test.step('1). Open website', async () => {
        await homePage.openDemoQAUrl()
        await utils.getTitle()
    })
    await test.step('2). Navigate to elements tab', async () => {
        await homePage.openElementsTab()
    })
    await test.step('3). Open Click Button Side Tab', async () => {
        await elementsPage.navigateToButtonsSideTab()
    })
    await test.step('4). Click on the button and verify the functionality', async () => {
        await buttonsPage.clickOnDoubleClickButton()
        await buttonsPage.clickOnRightClickButton()
        await buttonsPage.clickOnClickMeButton()
        await buttonsPage.verifyTheActionsOnButtonsPage('You have done a double click', 'You have done a right click')
        await utils.takeScreenshot('clickButtonFunctionality.png')
    })
})