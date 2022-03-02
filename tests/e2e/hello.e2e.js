const HelloWorldPage = require('../pages/helloWorld.page')

describe('My hello world page', () => {
    it('test', async () => {
        await HelloWorldPage.open()
				await HelloWorldPage.toggleTitle('HEROKA')
        await expect(HelloWorldPage.helloTitle).toBeExisting()
				await HelloWorldPage.toggleBtn.click()
        await expect(HelloWorldPage.helloTitle).not.toBeExisting()
    })
})
