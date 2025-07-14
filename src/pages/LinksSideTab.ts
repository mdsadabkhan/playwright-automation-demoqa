import Utils from "../../app_common/utils/Utils"

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
        await this.clickOn(this.homePageLink)
    }
    async clickOnHomeNs2Link() {
        await this.clickOn(this.homelNs2Link)
    }
    async clickOnCreatedLink() {
        await this.clickOn(this.createdLink)
    }
    async clickOnNoContentLink() {
        await this.clickOn(this.noContentLink)
    }
    async clickOnMovedLink() {
        await this.clickOn(this.movedLink)
    }
    async clickOnBadRequestLink() {
        await this.clickOn(this.badRequestLink)
    }
    async clickOnUnauthorizedLink() {
        await this.clickOn(this.unauthorizedLink)
    }
    async clickOnForbiddenLink() {
        await this.clickOn(this.forbiddenLink)
    }
    async clickOnNotFoundUrlLink() {
        await this.clickOn(this.notFoundUrlLink)
    }
    
}
export default LinksSideTab