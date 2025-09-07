import test from "@playwright/test"
import Utils from "../../../app_common/utils/Utils"

class PracticeForm extends Utils {
    firstNameInput: string
    lastNameInput: string
    emailInput: string
    maleAsGender: string
    femaleAsGender: string
    otherAsGender: string
    mobileInput: string
    dateOfBirthInput: string
    subjectsInput: string
    hobbiesAsSports: string
    hobbiesAsReading: string
    hobbiesAsMusic: string
    pictureUploadInput: string
    addressInput: string
    stateDropdown: string
    stateAsNCR: string
    stateAsUP: string
    stateAsHaryana: string
    stateAsRajasthan: string
    cityDropdown: string
    cityAsDelhi: string
    cityAsGurgaon: string
    cityAsNoida: string
    submitButton: string

    constructor(page: any) {
        super(page)
        this.page = page
        this.firstNameInput = '#firstName'
        this.lastNameInput = '#lastName'
        this.emailInput = '#userEmail'
        this.mobileInput = '#userNumber'
        this.dateOfBirthInput = '#dateOfBirthInput'
        this.subjectsInput = 'div#subjectsContainer'
        this.hobbiesAsSports = '#hobbies-checkbox-1'  
        this.hobbiesAsReading = '#hobbies-checkbox-2'
        this.hobbiesAsMusic = '#hobbies-checkbox-3'  
        this.pictureUploadInput = '#uploadPicture'
        this.addressInput = '#currentAddress'
        this.stateDropdown = '#state'
        this.stateAsNCR= '#react-select-3-option-0'
        this.stateAsHaryana= '#react-select-3-option-2'
        this.stateAsUP= '#react-select-3-option-1'
        this.stateAsRajasthan='#react-select-3-option-3'
        this.cityDropdown = '#city'
        this.cityAsDelhi='#react-select-4-option-0'
        this.cityAsGurgaon='#react-select-4-option-1'
        this.cityAsNoida='#react-select-4-option-2'
        this.submitButton = '#submit'
    }
    async fillFirstName(firstName: string) {
        await this.enterText(this.firstNameInput, firstName)
    }
    async fillLastName(lastName: string) {
        await this.enterText(this.lastNameInput, lastName)
    }
    async fillEmail(email: string) {
        await this.enterText(this.emailInput, email)
    }
    async selectGender(gender: string) {
        await this.page.getByText(gender , {exact: true}).click()
    }
    async fillMobileNumber(mobile: string) {
        await this.enterText(this.mobileInput, mobile)
    }
    async selectDateOfBirthFromCalender(dob: string) {
        await this.selectDateFromCalendar(this.dateOfBirthInput, dob)
    }
    async selectSubjects(...subjects: string[]): Promise<void> {
        await this.selectAutocompleteValues(this.subjectsInput, ...subjects)
    }
    async selectHobbiesAs(hobby: string) {
        await this.page.getByText(hobby).click()
    }
    async uploadPicture(filePath: string) {
        await this.uploadFile(this.pictureUploadInput, filePath)
    }
    async fillAddress(address: string) {
        await this.enterText(this.addressInput, address)
    }
    async selectStateAsUp() {
        await this.clickOn(this.stateDropdown)
        await this.clickOn(this.stateAsUP)
    }
    async selectStateAsHaryana() {
        await this.clickOn(this.stateDropdown)
        await this.clickOn(this.stateAsHaryana)
    }
    async selectStateAsNCR() {
        await this.clickOn(this.stateDropdown)
        await this.clickOn(this.stateAsNCR)
    }
    async selectStateAsRajasthan() {
        await this.clickOn(this.stateDropdown)
        await this.clickOn(this.stateAsRajasthan)
    }
    async selectCityAsDelhi() {
        await this.clickOn(this.cityDropdown)
        await this.clickOn(this.cityAsDelhi)
    }  
    async selectCityAsGurgaon() {
        await this.clickOn(this.cityDropdown)
        await this.clickOn(this.cityAsGurgaon)
    }  
    async selectCityAsNoida() {
        await this.clickOn(this.cityDropdown)
        await this.clickOn(this.cityAsNoida)
    }  
    async clickOnSubmitButton() {
        await this.clickOn(this.submitButton)
    }   
}
export default PracticeForm
