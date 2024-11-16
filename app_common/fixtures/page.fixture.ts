import {test as fixture} from '@playwright/test'


import HomePage from '../../src/pages/homepage'
import Utils from '../utils/Utils'
import ElementsPage from '../../src/pages/Elementspage'
import CheckBoxSideTab from '../../src/pages/CheckBoxSideTab'
import TextboxSideTab from '../../src/pages/TextboxSidetab'

type TestFixture = {
    homePage : HomePage
    utils: Utils
    elementsPage: ElementsPage
    checkBoxSideTab: CheckBoxSideTab
    textboxSideTab: TextboxSideTab
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
    }
    

 })
export default test