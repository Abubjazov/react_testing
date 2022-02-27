import userEvent from '@testing-library/user-event'
import { renderWithRouter} from '../../tests/helpers/renderWithRouter'
import { screen } from '@testing-library/react'

import { Navbar } from './Navbar'

describe('Navbar Test', () => {
	test('about link test', async () => {
			renderWithRouter(<Navbar />)
			const aboutLink = screen.getByTestId('about-link')

			userEvent.click(aboutLink)
			expect(screen.getByTestId('about-page')).toBeInTheDocument()
	})

	test('main link test', async () => {
		renderWithRouter(<Navbar />)
		const mainLink = screen.getByTestId('main-link')

		userEvent.click(mainLink)
		expect(screen.getByTestId('main-page')).toBeInTheDocument()
	})

	test('users link test', async () => {
		renderWithRouter(<Navbar />)
		const usersLink = screen.getByTestId('users-link')

		userEvent.click(usersLink)
		expect(screen.getByTestId('users-list')).toBeInTheDocument()
	})
})
