import { expect } from "playwright/test"
import Utils from "../../../app_common/utils/Utils"

class RadioButton extends Utils{
    yesRadioOption: string
    noRadioButton: string
    impressiveRadioButton: string
    selectedStringVerification: string

    constructor(page: any){
        super(page)
        this.page=page
        this.yesRadioOption='label[for="yesRadio"]'
        this.noRadioButton='label[for="noRadio"]'
        this.impressiveRadioButton='label[for="impressiveRadio"]'
        this.selectedStringVerification='p.mt-3'
    }
    async verifySelectionResponse(selectedOption: 'yes' | 'impressive') {
        let expectedText: string
        if (selectedOption === 'yes') {
            expectedText = 'You have selected Yes'
        } else if (selectedOption === 'impressive') {
            expectedText = 'You have selected Impressive'
        } else {
            throw new Error('Invalid option selected')
        }
        await this.verifyElementContainsText(this.selectedStringVerification, expectedText);
    }
    async clickOnYesForRadioOption(){
        await this.clickOn(this.yesRadioOption)
        await this.verifySelectionResponse('yes')
    }
    async verifyNoRadioButtonDisabled() {
        const noRadioButtonElement = this.page.locator(this.noRadioButton)
        const isVisible = await noRadioButtonElement.isVisible();
        const isEnabled = await noRadioButtonElement.isEnabled();
        expect(isVisible).toBeTruthy()
        expect(isEnabled).toBeFalsy()
    }
    async clickOnImpressiveRadioOption(){
        await this.clickOn(this.impressiveRadioButton)
        await this.verifySelectionResponse('impressive')
    }
    
} export default RadioButton