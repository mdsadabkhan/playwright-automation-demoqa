import Utils from "../../../app_common/utils/Utils"

class DynamicPropertiesTab extends Utils {
    enableButton: string
    colorChangeButton: string
    visibleAfterButton: string

    constructor(page: any) {
        super(page)
        this.page = page
        this.enableButton = '#enableAfter'
        this.colorChangeButton = '#colorChange'
        this.visibleAfterButton = '#visibleAfter'
    }

    // async clickOnEnableButton() {
    //     // await this.isElementEnabled(this.enableButton,  'Button not enabled')
    //     await this.wait(5000)
    //     await this.isElementEnabled(this.enableButton,  'Button not enabled even after waiting')
    //     await this.clickOn(this.enableButton)
    // }
    async clickOnEnableButton() {
        const button = this.page.locator(this.enableButton)
        const isInitiallyEnabled = await button.isEnabled()
            if (!isInitiallyEnabled) {
                console.log('Button is not enabled yet. Waiting for it to become enabled...')
            }   
        await this.wait(6000)

            const isEnabledAfterWait = await button.isEnabled();
                if (isEnabledAfterWait) {
                    console.log('Button is now enabled. Clicking...')
                await button.click()
                } else {
            throw new Error('Button is still not enabled after waiting.')
                }
    }
    async clickOnColorChangeButton() {
        await this.clickOn(this.colorChangeButton)
    }
    async clickOnVisibleAfterButton() {
        await this.clickOn(this.visibleAfterButton)
    }
}
export default DynamicPropertiesTab