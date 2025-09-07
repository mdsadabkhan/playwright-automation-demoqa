import Utils from "../../../app_common/utils/Utils"

class FormsTab extends Utils {
    practiceForm: string

    constructor(page: any) {
        super(page)
        this.page = page
        this.practiceForm = 'div.accordion .element-group:nth-child(2) ul.menu-list'
    }

    async navigateToPracticeFormSideTab() {
        await this.clickOn(this.practiceForm)
    }
}
export default FormsTab