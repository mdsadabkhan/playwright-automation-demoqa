import {test as fixture} from '@playwright/test'


import HomePage from '../../src/pages/homepage'
import Utils from '../utils/Utils'
import ElementsPage from '../../src/pages/Elementspage'
import CheckBoxSideTab from '../../src/pages/CheckBoxSideTab'
import TextboxSideTab from '../../src/pages/TextboxSidetab'
import RadioButton from '../../src/pages/radioButton'
import WebTable from '../../src/pages/WebTableSideTab'
import ButtonsPage from '../../src/pages/ButtonsPage'
import LinksSideTab from '../../src/pages/LinksSideTab'

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
    }

 })
export default test