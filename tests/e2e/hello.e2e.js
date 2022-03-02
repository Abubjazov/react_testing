const HelloWorldPage = require('../pages/helloWorld.page')

describe('My hello world page', () => {
    it('input "hello"', async () => {
        await HelloWorldPage.open()
				await HelloWorldPage.toggleTitle('hello')
        await expect(HelloWorldPage.helloTitle).toBeExisting()
				await HelloWorldPage.toggleBtn.click()
        await expect(HelloWorldPage.helloTitle).not.toBeExisting()
    })

		it('input without "hello"', async () => {
			await HelloWorldPage.open()
			await HelloWorldPage.toggleTitle('HEROKA')
			await expect(HelloWorldPage.helloTitle).not.toBeExisting()
			await HelloWorldPage.toggleBtn.click()
			await expect(HelloWorldPage.helloTitle).not.toBeExisting()
	})
})
