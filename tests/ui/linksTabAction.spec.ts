import {test} from '../../app_common/fixtures/page.fixture' 

test('To Verify the actions on links side tab', async ({ page, utils, homePage, elementsPage, linksSideTab }, testInfo) => {
    await test.step('1). Open website', async () => {
        await homePage.openDemoQAUrl() 
        await utils.getTitle() 
    }) 
    await test.step('2). Navigate to elements tab', async () => {
        await homePage.openElementsTab()
    }) 
    await test.step('3). Open Links Side Tab', async () => {
        await elementsPage.navigateToLinksSideTab()
    }) 
    // await test.step('4). Click on the Home Page Link', async () => {
    //     await linksSideTab.clickOnHomePageLink()
    //     await utils.takeScreenshot('homePageLink.png')
    // }) 
    // await test.step('5). Click on the Home Ns2 Link', async () => {
    //     await linksSideTab.clickOnHomeNs2Link()
    //     await utils.takeScreenshot('homeNs2Link.png')
    // }) 
    await test.step('6). Click on the Created Link', async () => {
        await linksSideTab.clickOnCreatedLink()
        await utils.takeScreenshot('createdLink.png')
    })
    await test.step('7). Click on the No Content Link', async () => {
        await linksSideTab.clickOnNoContentLink()
        await utils.takeScreenshot('noContentLink.png')
    }) 
    await test.step('8). Click on the Moved Link', async () => {
        await linksSideTab.clickOnMovedLink()
        await utils.takeScreenshot('movedLink.png')
    }) 
    await test.step('9). Click on the Bad Request Link', async () => {
        await linksSideTab.clickOnBadRequestLink()
        await utils.takeScreenshot('badRequestLink.png')
    }) 
    await test.step('10). Click on the Unauthorized Link', async () => {
        await linksSideTab.clickOnUnauthorizedLink()
        await utils.takeScreenshot('unauthorizedLink.png')
    }) 
    await test.step('11). Click on the Forbidden Link', async () => {
        await linksSideTab.clickOnForbiddenLink()
        await utils.takeScreenshot('forbiddenLink.png')
    }) 
    await test.step('12). Click on the Not Found Url Link', async () => {
        await linksSideTab.clickOnNotFoundUrlLink()
        await utils.takeScreenshot('notFoundUrlLink.png')
    })
})