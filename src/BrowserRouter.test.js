import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { App } from './App'
import { createReduxStore } from './store/store'

describe('TEST APP', () => {
  test('render App - router test', () => {
    render(
			<Provider store={createReduxStore()}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		)

    const mainLink = screen.getByTestId('main-link')
		const aboutLink = screen.getByTestId('about-link')

		userEvent.click(mainLink)
		expect(screen.getByTestId('main-page')).toBeInTheDocument()

		userEvent.click(aboutLink)
		expect(screen.getByTestId('about-page')).toBeInTheDocument()
	})

	test('Page 404 test', () => {
    render(
			<Provider store={createReduxStore()}>
				<MemoryRouter initialEntries={['/randomPath']}>
					<App />
				</MemoryRouter>
			</Provider>
		)

		expect(screen.getByTestId('page-404')).toBeInTheDocument()
	})
})
