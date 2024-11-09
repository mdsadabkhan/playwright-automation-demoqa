import { expect } from '@playwright/test' 
import {test} from '../../app_common/fixtures/page.fixture' 

// const credentials = JSON.parse(JSON.stringify(require('../../testData/resources/projectData.json'))) 
// const userDetails = JSON.parse(JSON.stringify(require('../../testData/resources/userData.json'))) 

// const user = credentials.sadabKhan.username
// const pass = credentials.sadabKhan.password
// const from = credentials.station.PUNE
// const to= credentials.station.HWH
// const newFrom= credentials.station.KMME
// const newTo = credentials.station.CPR

test('To Book an IRCTC Ticket in normal time', async ({ page, utils, homePage }, testInfo) => {
   
    await test.step('1). Open the IRCTC HomePage', async () => {
        await homePage.openDemoQAUrl() 
        await utils.getTitle() 
    }) 
    await test.step('2). Click On Login option and add Login Credentials', async () => {
        await homePage.openAlertsFramesAndWindowsTab()
        await utils.pause()
    }) 
}) 
