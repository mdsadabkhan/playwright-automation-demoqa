import Utils from "../../../app_common/utils/Utils"

class FormsTab extends Utils {
    // practiceForm: string

    constructor(page: any) {
        super(page)
        this.page = page
        // this.practiceForm = 'li#item-0.btn.btn-light:nth-of-type(1)'
    }

    async navigateToPracticeFormSideTab() {
        const practiceForm = this.page.getByText('Practice Form')
        await practiceForm.click()
    }
}
export default FormsTab