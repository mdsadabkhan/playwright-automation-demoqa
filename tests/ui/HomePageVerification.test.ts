import { expect } from '@playwright/test' 
import {test} from '../../app_common/fixtures/page.fixture' 
const userDetails = JSON.parse(JSON.stringify(require('../../src/testData/resources/userData.json'))) 
const employee = JSON.parse(JSON.stringify(require('../../src/testData/resources/projectData.json'))) 

const fullName = userDetails.Sadab.fullName
const email= userDetails.Sadab.email
const currentAddress= userDetails.Sadab.currentAddress
const permanentAddress=userDetails.Sadab.permanentAddress

const firstName = employee.santosh.firstName
const lastName= employee.pratik.lastName
const age= employee.sagar.age
const salary= employee.deepali.salary
const department= employee.rohit.department
const employeemail= employee.santosh.email


test('To Verify all the section of DEMO page', async ({ page, utils, homePage, elementsPage, textboxSideTab, checkBoxSideTab, radioButton, webTable, buttonsPage, linksSideTab }, testInfo) => {
   
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
    await test.step('9). Navigate to Web Component Tab', async()=>{
        await elementsPage.navigateToWebTablesSideTab()
    })
    await test.step('10). Add details to Web Component Tab', async()=>{
        await webTable.clickOnAddButton()
        await webTable.enterFirstName(firstName)
        await webTable.enterLastName(lastName)
        await webTable.enterAge(age)
        await webTable.enterSalaryAmount(salary)
        await webTable.enterEmailAddres(employeemail)
        await webTable.enterDepartment(department)
        await webTable.clickOnSubmitButton()
    })
    await test.step('11). Open Click Button Side Tab', async () => {
        await elementsPage.navigateToButtonsSideTab()
    })
    await test.step('12). Click on the button and verify the functionality', async () => {
        await buttonsPage.clickOnDoubleClickButton()
        await buttonsPage.clickOnRightClickButton()
        // await buttonsPage.clickOnClickMeButton()
        await buttonsPage.verifyTheActionsOnButtonsPage('You have done a double click', 'You have done a right click')
        await utils.takeScreenshot('clickButtonFunctionality.png')
    })
    await test.step('13). Navigate to Links Tab', async()=>{
        await elementsPage.navigateToLinksSideTab()
    })
    await test.step('14). To Verify the actions on Links Side Tab ', async () =>{
        // await linksSideTab.clickOnHomePageLink()
        // await utils.takeScreenshot('homePageLink.png')
        // await linksSideTab.clickOnHomeNs2Link()
        // await utils.takeScreenshot('homeNs2Link.png')
        await linksSideTab.clickOnCreatedLink()
        await utils.takeScreenshot('createdLink.png')
        await linksSideTab.clickOnNoContentLink()
        await utils.takeScreenshot('noContentLink.png')
        await linksSideTab.clickOnMovedLink()
        await utils.takeScreenshot('movedLink.png')
        await linksSideTab.clickOnBadRequestLink()
        await utils.takeScreenshot('badRequestLink.png')
        await linksSideTab.clickOnUnauthorizedLink()
        await utils.takeScreenshot('unauthorizedLink.png')
        await linksSideTab.clickOnForbiddenLink()
        await utils.takeScreenshot('forbiddenLink.png')
        await linksSideTab.clickOnNotFoundUrlLink()
        await utils.takeScreenshot('notFoundUrlLink.png')
    })
    
}) 
