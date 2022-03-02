import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'

import { createReduxStore } from '../../store/store'
import { Counter } from './Counter'

describe('Counter test', () => {
	const renderComponent = () => {
		render(
			<Provider store={createReduxStore()}>
				<Counter />
			</Provider>
		)
	}

	test('render Counter', () => {
		renderComponent()
		expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
	})

	test('increment Counter', () => {
		renderComponent()
		userEvent.click(screen.getByTestId('increment-btn'))
		expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
	})

	test('decrement Counter', () => {
		renderComponent()
		userEvent.click(screen.getByTestId('decrement-btn'))
		expect(screen.getByTestId('counter-value')).toHaveTextContent('-1')
	})
})
