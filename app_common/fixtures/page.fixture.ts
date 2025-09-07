import {test as fixture} from '@playwright/test'


import HomePage from '../../src/pages/HomePage'
import Utils from '../utils/Utils'
import ElementsPage from '../../src/pages/elementSection/Elementspage'
import CheckBoxSideTab from '../../src/pages/elementSection/CheckBoxSideTab'
import TextboxSideTab from '../../src/pages/elementSection/TextboxSidetab'
import RadioButton from '../../src/pages/elementSection/RadioButton'
import WebTable from '../../src/pages/elementSection/WebTableSideTab'
import ButtonsPage from '../../src/pages/elementSection/ButtonsPage'
import LinksSideTab from '../../src/pages/elementSection/LinksSideTab'
import BrockenLinksImage from '../../src/pages/elementSection/BrockenLinksImage'
import UploadAndDownloadSideTab from '../../src/pages/elementSection/UploadAndDownloadSideTab'
import DynamicPropertiesTab from '../../src/pages/elementSection/DynamicPropertiesTab'
import FormsTab from '../../src/pages/formSection/FormsTab'
import PracticeForm from '../../src/pages/formSection/PracticeForm'

type TestFixture = {
    buttonsPage: ButtonsPage
    homePage : HomePage
    utils: Utils
    elementsPage: ElementsPage
    checkBoxSideTab: CheckBoxSideTab
    textboxSideTab: TextboxSideTab
    radioButton: RadioButton
    webTable: WebTable
    linksSideTab: LinksSideTab
    brockenLinksImage: BrockenLinksImage
    uploadAndDownloadSideTab: UploadAndDownloadSideTab
    dynamicPropertiesTab: DynamicPropertiesTab
    formsTab: FormsTab
    practiceForm: PracticeForm

}
 export const test = fixture.extend<TestFixture>({

    utils: async ({page}, use)=>{
        await use(new Utils(page))
    },
    homePage: async ({page}, use)=>{
        await use(new HomePage(page))
    },
    elementsPage: async ({page}, use)=>{
        await use(new ElementsPage(page))
    },
    checkBoxSideTab: async ({page}, use)=>{
        await use(new CheckBoxSideTab(page))
    },
    textboxSideTab: async ({page}, use)=>{
        await use(new TextboxSideTab(page))
    },
    radioButton: async ({page}, use)=>{
        await use(new RadioButton(page))
    },
    webTable: async ({page}, use)=>{
        await use(new WebTable(page))
    },
    buttonsPage: async ({page}, use)=>{
        await use(new ButtonsPage(page))
    },
    linksSideTab: async ({page}, use)=>{
        await use(new LinksSideTab(page))
    },
    brockenLinksImage: async ({page}, use)=>{
        await use(new BrockenLinksImage(page))
    },
    uploadAndDownloadSideTab: async ({page}, use)=>{
        await use(new UploadAndDownloadSideTab(page))
    },
    dynamicPropertiesTab: async ({page}, use)=>{
        await use(new DynamicPropertiesTab(page))
    },
    formsTab: async ({page}, use)=>{
        await use(new FormsTab(page))
    },
    practiceForm: async ({page}, use)=>{
        await use(new PracticeForm(page))
    }

 })
export default test