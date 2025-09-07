import {test} from '../../app_common/fixtures/page.fixture'
const formData = JSON.parse(JSON.stringify(require('../../src/testData/formData/formData.json'))) 

const firstName = formData.Sadab.firstName
const lastName = formData.Sadab.lastName
const email = formData.Sadab.email
const mobile = formData.Sadab.phoneNumber
const gender = formData.Sadab.gender
const dateOfBirth = formData.Sadab.dateOfBirth 
const currentAddress = formData.Sadab.currentAddress
const state = formData.Sadab.state
const city = formData.Sadab.city

test('@E2E To Verify the form filling functionality', async ({ page, homePage, utils, formsTab, practiceForm }, testInfo) => {
    
    await test.step('1). Open website', async () => {
        await homePage.openDemoQAUrl() 
        await utils.getTitle() 
    }) 
    await test.step('2). Navigate to elements tab', async () => {
        await homePage.openFormsTab()
    }) 
    await test.step('3). Open Practice Form', async () => {
        await formsTab.navigateToPracticeFormSideTab()
    }) 
    await test.step('4). Fill the form with Personal Details', async () => {
        await practiceForm.fillFirstName(firstName)
        await practiceForm.fillLastName(lastName)
        await practiceForm.fillEmail(email)
        await practiceForm.selectGender('Male')
        await practiceForm.fillMobileNumber(mobile)
        await practiceForm.selectDateOfBirthFromCalender(dateOfBirth)
    })
    await test.step('5). Adding Subjects, Hobbies and Photo', async () => {
        await practiceForm.selectSubjects('Hin','Engl','Math')
        await practiceForm.selectHobbiesAs('Sports')
        await practiceForm.selectHobbiesAs('Reading')
        await practiceForm.uploadPicture('src/screenShots/textbox.png')
    }) 
    await test.step('6). Adding Address related details', async () => {
        await practiceForm.fillAddress(currentAddress)
        await practiceForm.selectStateAsNCR()   
        await practiceForm.selectCityAsDelhi()
        await practiceForm.clickOnSubmitButton()
        await utils.takeScreenshot('formSubmission.png')
        // await utils.pause()
    }) 
})


// #stateCity-wrapper > div:nth-of-type(2) div.css-1hwfws3
// #react-select-6-option-1
// div.css-1uccc91-singleValue
// #react-select-6-option-0
// #react-select-6-option-2
// #react-select-6-option-3
// div:nth-of-type(3) div.css-1hwfws3
// #react-select-7-option-0
// #react-select-7-option-1
// #stateCity-wrapper > div:nth-of-type(2) div.css-1uccc91-singleValue
