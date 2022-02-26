import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { App } from './App'

describe('TEST APP', () => {
  test('render App - router test', () => {
    render(<App />)

    const mainLink = screen.getByTestId('main-link')
		const aboutLink = screen.getByTestId('about-link')

		userEvent.click(mainLink)
		expect(screen.getByTestId('main-page')).toBeInTheDocument()
		userEvent.click(aboutLink)
		expect(screen.getByTestId('about-page')).toBeInTheDocument()
	})
})
