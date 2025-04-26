import Utils from "../../app_common/utils/Utils";
import { expect, type Page } from "@playwright/test";

class CheckBoxSideTab extends Utils{
    expandAllOption:string
    collapseAllOption: string
    expandHomeOption: string
    expandDesktopOption: string
    expandDocumentOption: string
    expandDownloadoption: string
    expandWorkSpaceOption: string
    expandOfficeOption: string
    notesCheckbox: string
    homeCheckbox: string
    desktopCheckbox: string
    commandsCheckbox: string
    documentsCheckbox: string
    workspaceCheckbox: string
    reactCheckbox: string
    angularCheckBox: string
    veuCheckbox: string
    officeCheckbox: string
    pubilcCheckbox: string
    privateCheckbox: string
    classifiedCheckbox: string
    generalCheckbox: string
    downloadsCheckBox:string
    wordfiledocCheckbox: string
    excelFileDocCheckbox: string

    constructor(page:any){
        super(page)
        this.page=page;
        this.expandAllOption='button.rct-option-expand-all' //button[title="Expand all"]
        this.collapseAllOption='button[aria-label="Collapse all"]'  //button[title="Collapse all"]
        this.expandHomeOption='button.rct-collapse-btn'
        this.expandDesktopOption='button.rct-collapse:nth-of-type(1)'  
        this.expandDocumentOption='label[for="tree-node-documents"]' // here onwards is AI locators
        this.expandDownloadoption='label[for="tree-node-downloads"]'
        this.expandWorkSpaceOption=''
        this.expandOfficeOption=''
        this.notesCheckbox='label[for="tree-node-notes"] input[type="checkbox"]'
        this.homeCheckbox='label[for="tree-node-home"]'
        this.desktopCheckbox='label[for="tree-node-desktop"]'
        this.commandsCheckbox='label[for="tree-node-commands"] input[type="checkbox"]'
        this.documentsCheckbox=''
        this.workspaceCheckbox='label[for="tree-node-workspace"] input[type="checkbox"]'
        this.reactCheckbox='label[for="tree-node-react"] input[type="checkbox"]'
        this.angularCheckBox='label[for="tree-node-angular"] input[type="checkbox"]'
        this.veuCheckbox='label[for="tree-node-veu"] input[type="checkbox"]'
        this.officeCheckbox='label[for="tree-node-office"] input[type="checkbox"]'
        this.pubilcCheckbox='label[for="tree-node-public"] input[type="checkbox"]'
        this.privateCheckbox='label[for="tree-node-private"] input[type="checkbox"]'
        this.classifiedCheckbox='label[for="tree-node-classified"] input[type="checkbox"]'
        this.generalCheckbox='label[for="tree-node-general"] input[type="checkbox"]'
        this.downloadsCheckBox='label[for="tree-node-downloads"] input[type="checkbox"]'
        this.wordfiledocCheckbox='label[for="tree-node-wordFile"] input[type="checkbox"]'
        this.excelFileDocCheckbox='label[for="tree-node-excelFile"] input[type="checkbox"]'
    }
    async expandAllSectionAtOnce(){
        await this.clickOn(this.expandAllOption)
    }
    async collapseAllSectionAtOnce(){
        await this.clickOn(this.collapseAllOption)
    }
    async expandHomeSection(){
        await this.clickOn(this.expandHomeOption)
    }
    async expandDesktopSection(){
        await this.clickOn(this.expandDesktopOption)
    }
    //also verify the submitted details below
    
}
export default CheckBoxSideTab
