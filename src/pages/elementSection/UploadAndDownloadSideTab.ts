import Utils from "../../../app_common/utils/Utils"   

class UploadAndDownloadSideTab extends Utils {
    uploadFileInput: string
    downloadLink: string

    constructor(page: any) {
        super(page)
        this.page = page
        this.uploadFileInput = 'input#uploadFile'
        this.downloadLink = 'a#downloadButton'
    }

    async uploadAFile(filePath: string) {
        await this.uploadFile(this.uploadFileInput, filePath)
    }
}
export default UploadAndDownloadSideTab