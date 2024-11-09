import Utils from '../../app_common/utils/Utils'
import ENV from '../../app_common/environments/env'


class HomePage extends Utils{
    url : string
    elementsSection: string
    fromsSection: string
    alertsFramesAndWindowsSection: string
    widgetsSection: string
    interactionSection: string
    bookStoreApplicationSection: string

    constructor(page: any){
        super(page)
        this.page = page
        this.url = String(ENV.URL)
        this.elementsSection= 'div.category-cards>div:nth-of-type(1)'
        this.fromsSection= 'div.category-cards>div:nth-of-type(2)'
        this.alertsFramesAndWindowsSection='div.category-cards>div:nth-of-type(3)'
        this.widgetsSection='div.category-cards>div:nth-of-type(4)'
        this.interactionSection='div.category-cards>div:nth-of-type(5)'
        this.bookStoreApplicationSection='div.category-cards>div:nth-of-type(6)'

    }
    async openDemoQAUrl(){
        await this.navigateTo(this.url)
    }
    async openElementsTab(){
        await this.clickOn(this.elementsSection)
    }
    async openFormsTab(){
        await this.clickOn(this.fromsSection)
    }
    async openAlertsFramesAndWindowsTab(){
        await this.clickOn(this.alertsFramesAndWindowsSection)
    }
    async openWidgetsTab(){
        await this.clickOn(this.widgetsSection)
    }
    async openInteractionTab(){
        await this.clickOn(this.interactionSection)
    }
    async openBookStoreApplicationTab(){
        await this.clickOn(this.bookStoreApplicationSection)
    }

}
export default HomePage
