import Utils from "../../../app_common/utils/Utils"

class LinksSideTab extends Utils {
    homePageLink: string
    homelNs2Link: string
    createdLink: string
    noContentLink: string
    movedLink: string
    badRequestLink: string
    unauthorizedLink: string
    forbiddenLink: string
    notFoundUrlLink: string

    constructor(page: any){
        super(page)
        this.page = page
        this.homePageLink = '#simpleLink'
        this.homelNs2Link = '#dynamicLink'
        this.createdLink = '#created'
        this.noContentLink = '#no-content'
        this.movedLink = '#moved'
        this.badRequestLink = '#bad-request'
        this.unauthorizedLink = '#unauthorized'
        this.forbiddenLink = '#forbidden'
        this.notFoundUrlLink = '#invalid-url'
    }
    async clickOnHomePageLink() {
        // await this.clickOn(this.homePageLink)
        await this.verifyNewTabUrl('https://demoqa.com/', this.homePageLink)
        await this.takeScreenshot('homePageLink.png')
    }
    async clickOnHomeNs2Link(expectedURL: string) {
        // await this.clickOn(this.homelNs2Link)
        await this.verifyNewTabUrl(expectedURL, this.homelNs2Link)
        await this.takeScreenshot('homeNs2Link.png')
    }
    async clickOnCreatedLink() {
        await this.clickOn(this.createdLink)
        await this.verifyApiStatusCode(this.page.request, 'https://demoqa.com/created', 201, 'GET')
        await this.takeScreenshot('createdLink.png')
    }
    async clickOnNoContentLink() {
        await this.clickOn(this.noContentLink)  
        await this.verifyApiStatusCode(this.page.request, 'https://demoqa.com/no-content', 204, 'GET')
        await this.takeScreenshot('noContentLink.png')
    }
    async clickOnMovedLink() {
        await this.clickOn(this.movedLink)
        await this.verifyApiStatusCode(this.page.request, 'https://demoqa.com/moved', 301, 'GET')
        await this.takeScreenshot('movedLink.png')
    }
    async clickOnBadRequestLink() {
        await this.clickOn(this.badRequestLink)
        await this.verifyApiStatusCode(this.page.request, 'https://demoqa.com/bad-request', 400, 'GET')
        await this.takeScreenshot('badRequestLink.png')
    }
    async clickOnUnauthorizedLink() {
        await this.clickOn(this.unauthorizedLink)
        await this.verifyApiStatusCode(this.page.request, 'https://demoqa.com/unauthorized', 401, 'GET')
        await this.takeScreenshot('unauthorizedLink.png')
    }
    async clickOnForbiddenLink() {
        await this.clickOn(this.forbiddenLink)
        await this.verifyApiStatusCode(this.page.request, 'https://demoqa.com/forbidden', 403, 'GET')
        await this.takeScreenshot('forbiddenLink.png')
    }
    async clickOnNotFoundUrlLink() {
        await this.clickOn(this.notFoundUrlLink)
        await this.verifyApiStatusCode(this.page.request, 'https://demoqa.com/invalid-url', 404, 'GET')
        await this.takeScreenshot('notFoundUrlLink.png')
    }
    
}
export default LinksSideTab