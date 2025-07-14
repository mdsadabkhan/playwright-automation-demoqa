import Utils from '../../app_common/utils/Utils';
import { Page, Locator } from '@playwright/test';

class ButtonsPage extends Utils{
    
    doubleClickButton: string;
    rightClickButton: string;
    clickMeButton: string;
    doubleClickMessage: string;
    rightClickMessage: string;
    clickMeMessage: string;

    constructor(page: any) {
        super(page);
        this.page = page;
        this.doubleClickButton = '#doubleClickBtn'
        this.rightClickButton = '#rightClickBtn'
        this.clickMeButton = 'button:has-text("Click Me")'
        this.doubleClickMessage = '#doubleClickMessage'
        this.rightClickMessage = '#rightClickMessage'
        this.clickMeMessage = '#dynamicClickMessage'
    }

    async clickOnDoubleClickButton() {
        await this.doubleClickOn(this.doubleClickButton)
    }
    async clickOnRightClickButton() {
        await this.rightClickOn(this.rightClickButton)
    }
    async clickOnClickMeButton() {
        await this.clickOn(this.clickMeButton)
    }
    async verifyTheActionsOnButtonsPage( doubleClickAction: string, rightClickAction: string) {
        await this.verifyElementContainsText(this.doubleClickMessage, doubleClickAction)
        await this.verifyElementContainsText(this.rightClickMessage, rightClickAction)
        // await this.verifyElementContainsText(this.clickMeMessage, clickMeAction)
    }

}export default ButtonsPage