import { expect } from '@playwright/test' 
import {test} from '../../app_common/fixtures/page.fixture' 
const userDetails = JSON.parse(JSON.stringify(require('../../src/testData/resources/userData.json'))) 

const fullName = userDetails.Sadab.fullName
const email= userDetails.Sadab.email
const currentAddress= userDetails.Sadab.currentAddress
const permanentAddress=userDetails.Sadab.permanentAddress

test('To Verify all the section of DEMO page', async ({ page, utils, homePage, elementsPage, textboxSideTab, checkBoxSideTab, radioButton }, testInfo) => {
   
    await test.step('1). Open website', async () => {
        await homePage.openDemoQAUrl() 
        await utils.getTitle() 
    }) 
    await test.step('2). Navigate to elements tab', async () => {
        await homePage.openElementsTab()
    }) 
    await test.step('3). Open TextBoxSideTab', async () => {
        await elementsPage.navigateToTextBoxSideTab()
    }) 
    await test.step('4). Add details in textbox tab', async () => {
        await textboxSideTab.enterFullName(fullName)
        await textboxSideTab.enterEmail(email)
        await textboxSideTab.enterCurrentAddress(currentAddress)
        await textboxSideTab.enterPermanentAddress(permanentAddress)
        await textboxSideTab.clickOnSubmitButton()
        await textboxSideTab.verifyTheAddedDetails(fullName,currentAddress,email,permanentAddress)
        await utils.takeScreenshot('textbox.png')
    }) 
    await test.step('5). Navigate to Checkbox Side Tab', async()=>{
        await elementsPage.navigateToCheckBoxSideTab()
    }) 
    await test.step('6). Expand the respective section in the tab', async()=>{
        await checkBoxSideTab.expandAllSectionAtOnce()
        await utils.takeScreenshot('ExpandedSection.png')
        await checkBoxSideTab.collapseAllSectionAtOnce()
        // await checkBoxSideTab.expandHomeSection()
        // await utils.takeScreenshot('ExpandedHomeSection.png')
    })
    await test.step('7). Navigate to Radio button Side Tab', async()=>{
        await elementsPage.navigateToRadioButtonSideTab()
    })
    await test.step('8). Complete options on Radio button Side Tab', async()=>{
        await radioButton.clickOnYesForRadioOption()
        await radioButton.clickOnImpressiveRadioOption()
        await radioButton.verifyNoRadioButtonDisabled()
        await utils.takeScreenshot('radioVerification.png')
    })

}) 
