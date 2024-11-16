import Utils from "../../app_common/utils/Utils";

class TextboxSideTab extends Utils{
    fullName:string
    email: string
    currentAddress: string
    permanentAddress: string
    submitButton: string
    nameVerification: string
    emailVerification: string
    currentAdrdessVerification: string
    permanentAddressVerification: string

    constructor(page:any){
        super(page)
        this.page=page;
        this.fullName='input#userName'
        this.currentAddress='textarea#currentAddress'
        this.email='input#userEmail'
        this.permanentAddress='textarea#permanentAddress'
        this.submitButton='button#submit'
        this.nameVerification='p[id="name"]'
        this.emailVerification='p[id="email"]'
        this.currentAdrdessVerification='p[id="currentAddress"]'
        this.permanentAddressVerification='p[id="permanentAddress"]'
    }
    async enterFullName(fullName: string){
        await this.enterText(this.fullName, fullName)
    }
    async enterCurrentAddress(currentAddress: string){
        await this.enterText(this.currentAddress, currentAddress)
    }
    async enterEmail(email: string){
        await this.enterText(this.email, email)
    }
    async enterPermanentAddress(permanentAddress: string){
        await this.enterText(this.permanentAddress, permanentAddress)
    }
    async clickOnSubmitButton(){
        await this.clickOn(this.submitButton)
    }
    async verifyTheAddedDetails(fullName: string, currentAddress: string, email: string, permanentAddress: string){
        try{
            console.log("Added details Verification....")
            await this.verifyElementContainsText(this.nameVerification , `Name:${fullName}`)
            console.log(`Verified Full Name As: "${fullName}"`)
            await this.verifyElementContainsText(this.emailVerification , `Email:${email}`)
            console.log(`Verified Emials As: "${email}"`)
            await this.verifyElementContainsText(this.currentAdrdessVerification , `Current Address :${currentAddress}`)
            console.log(`Verified Current Address As: "${currentAddress}"`)
            await this.verifyElementContainsText(this.permanentAddressVerification , `Permananet Address :${permanentAddress}`)
            console.log(`Verified Permanent Address As: "${permanentAddress}"`)

            console.log("Details verified succesfully......")
        }
        catch(error){
            console.log('Veification Failed.....')
            console.error(error.message || error);
            throw new Error("Failed to verify the submitted details.");
        }
    }
    
}
export default TextboxSideTab