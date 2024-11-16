import test from './fixtures/page.fixture'

test.beforeAll(async ({})=>{

    console.log('Before All the test....')
})

test.afterAll(async ({})=>{

    console.log('After All the test....')
})

export default test