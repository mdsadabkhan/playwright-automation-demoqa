import Utils from '../../../app_common/utils/Utils'
import { expect, test } from "@playwright/test"

class BrockenLinksImage extends Utils {
    brockenLink: string
    brockenImage: string
    validLink: string
    validImage: string

    constructor(page: any) {
        super(page)
        this.page = page
        this.validImage = '(img[src="/images/Toolsqa.jpg"])'
        this.validLink = 'a[href="http://demoqa.com"]'
        this.brockenLink = 'a[href="http://the-internet.herokuapp.com/status_codes/500"]'
        this.brockenImage = 'img[src="/images/Toolsqa_1.jpg"]'
    }

    async clickOnBrockenLink() {
        await this.clickOn(this.brockenLink)
        await this.verifyApiStatusCode(this.page.request, 'http://the-internet.herokuapp.com/status_codes/500', 500, 'GET')
        await this.page.goBack()
    }
    async verifyBrockenImage() {
        const image = this.page.locator(this.brockenImage)
        await expect(image).toBeVisible()
    }
    async verifyValidLink() {
        await this.page.click(this.validLink)
        await this.page.waitForLoadState('load')
        await expect(this.page).toHaveURL('https://demoqa.com/')
        await this.page.goBack()
        await this.page.waitForLoadState('load')
        await expect(this.page).toHaveURL('https://demoqa.com/broken')
    }
    async verifyValidImage() {
        // await this.waitForElementVisible(this.validImage)
        const image = this.page.locator(this.validImage).nth(1)
        await expect(image).toBeVisible()
    }
}
export default BrockenLinksImage