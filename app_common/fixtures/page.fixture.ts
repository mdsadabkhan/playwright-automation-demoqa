import {test as fixture} from '@playwright/test'


import HomePage from '../../src/pages/homepage'
import Utils from '../utils/Utils'
import ElementsPage from '../../src/pages/Elementspage'
import CheckBoxSideTab from '../../src/pages/CheckBoxSideTab'
import TextboxSideTab from '../../src/pages/TextboxSidetab'
import RadioButton from '../../src/pages/radioButton'
import WebComponent from '../../src/pages/WebComponent'

type TestFixture = {
    homePage : HomePage
    utils: Utils
    elementsPage: ElementsPage
    checkBoxSideTab: CheckBoxSideTab
    textboxSideTab: TextboxSideTab
    radioButton: RadioButton
    webComponent: WebComponent

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
    webComponent: async ({page}, use)=>{
        await use(new WebComponent(page))
    }
    

 })
export default test