import userEvent from '@testing-library/user-event'
import { renderWithRouter} from '../../tests/helpers/renderWithRouter'
import { screen } from '@testing-library/react'

import { Navbar } from './Navbar'

describe('Navbar Test', () => {
	test('should render with correct values', async () => {
			renderWithRouter(<Navbar />)
			const mainLink = screen.getByTestId('main-link')
			const aboutLink = screen.getByTestId('about-link')
			const usersLink = screen.getByTestId('users-link')

			userEvent.click(aboutLink)
			expect(screen.getByTestId('about-page')).toBeInTheDocument()
			userEvent.click(mainLink)
			expect(screen.getByTestId('main-page')).toBeInTheDocument()
			userEvent.click(usersLink)
			expect(screen.getByTestId('users-list')).toBeInTheDocument()
	})
})
