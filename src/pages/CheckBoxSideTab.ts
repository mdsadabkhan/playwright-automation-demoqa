import Utils from "../../app_common/utils/Utils";

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
        this.expandAllOption='button.rct-option-expand-all'
        this.collapseAllOption='button[aria-label="Collapse all"]'
        this.expandHomeOption='button.rct-collapse-btn'
        this.expandDesktopOption=''
        this.expandDocumentOption=''
        this.expandDownloadoption=''
        this.expandWorkSpaceOption=''
        this.expandOfficeOption=''
        this.notesCheckbox=''
        this.homeCheckbox=''
        this.desktopCheckbox=''
        this.commandsCheckbox=''
        this.documentsCheckbox=''
        this.workspaceCheckbox=''
        this.reactCheckbox=''
        this.angularCheckBox=''
        this.veuCheckbox=''
        this.officeCheckbox=''
        this.pubilcCheckbox=''
        this.privateCheckbox=''
        this.classifiedCheckbox=''
        this.generalCheckbox=''
        this.downloadsCheckBox=''
        this.wordfiledocCheckbox=''
        this.excelFileDocCheckbox=''
    }
    //also verify the submitted details below
    
}
export default CheckBoxSideTab