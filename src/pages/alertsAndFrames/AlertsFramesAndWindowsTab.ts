import Utils from '../../../app_common/utils/Utils'


class AlertsFramesAndWindowsTab extends Utils {
    browsersWindowTab: string
    alertsTab: string
    framesTab: string
    nestedFramesTab: string
    modalDialogsTab: string

    constructor(page: any) {
        super(page)
        this.page = page
        this.browsersWindowTab = 'div.element-list.collapse.show li#item-0'
        this.alertsTab = 'div.element-list.collapse.show li#item-1'
        this.framesTab = 'div.element-list.collapse.show li#item-2'
        this.nestedFramesTab = 'div.element-list.collapse.show li#item-3'
        this.modalDialogsTab = 'div.element-list.collapse.show li#item-4'
    }

    async navigateToBrowserWindowTab() {
        await this.clickOn(this.browsersWindowTab)
    }
    async navigateToAlertsTab() {
        await this.clickOn(this.alertsTab)
    }
    async navigateToFramesTab() {
        await this.clickOn(this.framesTab)
    }
    async navigateToNestedFramesTab() {
        await this.clickOn(this.nestedFramesTab)
    }
    async navigateToModalDialogsTab() {
        await this.clickOn(this.modalDialogsTab)
    }

}
export default AlertsFramesAndWindowsTab