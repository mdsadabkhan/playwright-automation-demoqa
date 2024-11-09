import { expect } from '@playwright/test' 
import {test}  from '../../app_commons/fixtures/page.fixtures' 

const credentials = JSON.parse(JSON.stringify(require('../../testData/resources/projectData.json'))) 
const userDetails = JSON.parse(JSON.stringify(require('../../testData/resources/userData.json'))) 

const user = credentials.sadabKhan.username
const pass = credentials.sadabKhan.password
const from = credentials.station.PUNE
const to= credentials.station.HWH
const newFrom= credentials.station.KMME
const newTo = credentials.station.CPR

test('To Book an IRCTC Ticket in normal time', async ({ page, utils, loginPage, homePage, journeyDetails, trainSelectionPage }, testInfo) => {
   
    await test.step('1). Open the IRCTC HomePage', async () => {
        await loginPage.openIRCTCUrl() 
        await utils.getTitle() 
    }) 
    await test.step('2). Click On Login option and add Login Credentials', async () => {
        await loginPage.clickOnLoginOnHomePage()
        await loginPage.enterUserName(user)
        await loginPage.enterPassword(pass)
        await loginPage.enterTextFromCaptcha() 
        // await utils.wait(6000) // for entering the captcha
        // await loginPage.clickOnSignInButton()
    }) 
    await test.step('3). HomePage option selection for Journey Details', async () => {
        await journeyDetails.enterOriginLocationInitials('PUNE')
        await journeyDetails.selectOriginAs(from)
        await journeyDetails.enterDestinationLocationInitials('HWH')
        await journeyDetails.selectDestinationAs(to)
        await journeyDetails.openCalanderForSelectingJourneyDate('21')
        await journeyDetails.clickOnSearchForTrainButton()
    })
    // await test.step('4).Modification of Journey Details', async ()=> {
    //     await trainSelectionPage.enterModifyOriginStationInitials('KMME')
    //     await trainSelectionPage.selectModifiedOriginAs(newFrom)
    //     await trainSelectionPage.enterModifyDestinationStationInitials('CPR')
    //     await trainSelectionPage.selectModifiedDestinationAs(newTo)
    //     await trainSelectionPage.clickOnModifySearchButton()
    // });
    // await test.step('4).Working with the filters', async ()=> {
    //     await trainSelectionPage.selectOrDeselectTheCheckboxFor1AC()
    //     await trainSelectionPage.selectOrDeselectTheCheckboxFor2AC()
    //     await trainSelectionPage.selectOrDeselectTheCheckboxFor3AC()
    //     await trainSelectionPage.clickOnSelectAllOptionForSelectingTheClasses()
    //     await trainSelectionPage.clickOnNextDayButton()
    //     await trainSelectionPage.clickOnPreviousDayButton()
    //     await utils.pause()
    // });
    
}) 
