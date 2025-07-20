import Utils from "../../../app_common/utils/Utils";

class ElementsPage extends Utils{
    textBoxSideTab: string
    checkBoxSideTab: string
    radioButtonSideTab: string
    webTablesSideTab: string
    buttonsSideTab: string
    linksSideTab: string
    brokenLinksImagesSideTab: string
    uploadAndDownloadSidetab: string
    dynamicPropertiesSideTab: string 

    constructor(page: any){
        super(page)
        this.page= page
        this.textBoxSideTab='div.show>ul>li:nth-of-type(1)'
        this.checkBoxSideTab='div.show>ul>li:nth-of-type(2)'
        this.radioButtonSideTab='div.show>ul>li:nth-of-type(3)'
        this.webTablesSideTab='div.show>ul>li:nth-of-type(4)'
        this.buttonsSideTab='div.show>ul>li:nth-of-type(5)'
        this.linksSideTab='div.show>ul>li:nth-of-type(6)'
        this.brokenLinksImagesSideTab='div.show>ul>li:nth-of-type(7)'
        this.uploadAndDownloadSidetab='div.show>ul>li:nth-of-type(8)'
        this.dynamicPropertiesSideTab='div.show>ul>li:nth-of-type(9)'
    }

    async navigateToTextBoxSideTab(){
        this.clickOn(this.textBoxSideTab)
    }
    async navigateToCheckBoxSideTab() {
        await this.clickOn(this.checkBoxSideTab);
    }
    async navigateToRadioButtonSideTab() {
        await this.clickOn(this.radioButtonSideTab);
    }
    async navigateToWebTablesSideTab() {
        await this.clickOn(this.webTablesSideTab);
    }
    async navigateToButtonsSideTab() {
        await this.clickOn(this.buttonsSideTab);
    }
    async navigateToLinksSideTab() {
        await this.clickOn(this.linksSideTab);
    }
    async navigateToBrokenLinksImagesSideTab() {
        await this.clickOn(this.brokenLinksImagesSideTab);
    }
    async navigateToUploadAndDownloadSideTab() {
        await this.clickOn(this.uploadAndDownloadSidetab);
    }
    async navigateToDynamicPropertiesSideTab() {
        await this.clickOn(this.dynamicPropertiesSideTab);
    }

} 
export default ElementsPage