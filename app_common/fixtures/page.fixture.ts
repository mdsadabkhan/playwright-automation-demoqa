import {test as fixture} from '@playwright/test'


import HomePage from '../../src/pages/homepage'
import Utils from '../utils/Utils'

type TestFixture = {
    homePage : HomePage
    utils: Utils
}
 export const test = fixture.extend<TestFixture>({

    utils: async ({page}, use)=>{
        await use(new Utils(page))
    },
    homePage: async ({page}, use)=>{
        await use(new HomePage(page))
    }

 })
export default test