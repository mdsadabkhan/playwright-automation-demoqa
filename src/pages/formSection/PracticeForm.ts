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
    cityDropdown: string
    submitButton: string

    constructor(page: any) {
        super(page)
        this.page = page
        this.firstNameInput = '#firstName'
        this.lastNameInput = '#lastName'
        this.emailInput = '#userEmail'
        this.maleAsGender ='input[id="gender-radio-1"]'
        this.femaleAsGender = 'input[id="gender-radio-2"]'
        this.otherAsGender = 'input[id="gender-radio-3"]'
        this.mobileInput = '#userNumber'
        this.dateOfBirthInput = '#dateOfBirthInput'
        this.subjectsInput = '#subjectsInput'
        this.hobbiesAsSports = '#hobbies-checkbox-1'  
        this.hobbiesAsReading = '#hobbies-checkbox-2'
        this.hobbiesAsMusic = '#hobbies-checkbox-3'  
        this.pictureUploadInput = '#uploadPicture'
        this.addressInput = '#currentAddress'
        this.stateDropdown = '#state'
        this.cityDropdown = '#city'
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
        const genderMap = {
            Male: this.maleAsGender,
            Female: this.femaleAsGender,
            Other: this.otherAsGender
        }
        await this.selectRadioOptionByLabel(gender, genderMap)
    }
    async fillMobileNumber(mobile: string) {
        await this.enterText(this.mobileInput, mobile)
    }
    async selectDateOfBirthFromCalender(dob: string) {
        await this.selectDateFromCalendar(this.dateOfBirthInput, dob)
    }
    async fillSubjects(subjects1: string, subjects2: string) {
        await this.interactWithAutocomplete(this.subjectsInput, subjects1, subjects2)
    }
    async selectHobbiesAs(hobby: string) {
        switch (hobby) {
            case 'Sports':
                await this.clickOn(this.hobbiesAsSports)
                break;
            case 'Reading':
                await this.clickOn(this.hobbiesAsReading)
                break;
            case 'Music':
                await this.clickOn(this.hobbiesAsMusic)
                break;
            default:
                throw new Error(`Unknown hobby: ${hobby}`)
    }
    }
    async uploadPicture(filePath: string) {
        await this.uploadFile(this.pictureUploadInput, filePath)
    }
    async fillAddress(address: string) {
        await this.enterText(this.addressInput, address)
    }
    async selectState(state: string) {
        await this.selectOptionFromDropdown(this.stateDropdown, state) 
    }
    async selectCity(city: string) {
        await this.selectOptionFromDropdown(this.cityDropdown, city)
    }  
    async clickOnSubmitButton() {
        await this.clickOn(this.submitButton)
    }   

}
export default PracticeForm
