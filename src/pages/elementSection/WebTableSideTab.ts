import Utils from "../../../app_common/utils/Utils"

class WebTable extends Utils{
   addButton: string
   searchboxOption: string
   addFirstName: string
   addLastName: string
   addEmail: string
   addAge: string
   addSalary: string
   addDepartment: string
   submitButton: string
   closeWindowOption: string
   registrationFormWindow: string

    constructor(page: any){
        super(page)
        this.page=page
        this.addButton='button#addNewRecordButton'
        this.searchboxOption='input[id="searchBox"]'
        this.addFirstName='input#firstName'
        this.addLastName='input#lastName'
        this.addEmail='input#userEmail'
        this.addAge='input#age'
        this.addSalary='input#salary'
        this.addDepartment='input#department'
        this.submitButton='button#submit'
        this.closeWindowOption='button.close'
        this.registrationFormWindow='div[class="modal-content"]'
    }
    async clickOnAddButton(){
        await this.clickOn(this.addButton)
        await this.isElementVisible(this.registrationFormWindow, 'Registration Window is not Visible to Add details.....')
    }
    async searchForAvailableDetails(addDetailsToSearch: string){
        await this.enterText(this.searchboxOption, addDetailsToSearch)
    }
    async enterFirstName(firstName: string){
        await this.enterText(this.addFirstName, firstName)
    }
    async enterLastName(lastName: string){
        await this.enterText(this.addLastName, lastName)
    }
    async enterEmailAddres(emial: string){
        await this.enterText(this.addEmail, emial)
    }
    async enterAge(age: string){
        await this.enterText(this.addAge, age)
    }
    async enterSalaryAmount( salary: string){
        await this.enterText(this.addSalary, salary)
    }
    async enterDepartment(department: string){
        await this.enterText(this.addDepartment, department)
    }
    async clickOnSubmitButton(){
        await this.clickOn(this.submitButton)
    }
    async clcikOnCloseRegistrationWindow(){
        await this.clickOn(this.closeWindowOption)
    }


    
} export default WebTable