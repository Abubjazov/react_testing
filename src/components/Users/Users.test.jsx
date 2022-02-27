import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { get } from 'axios'

import { Users } from './Users'
import { renderWithRouter} from '../../tests/helpers/renderWithRouter'

jest.mock('axios')

describe('Render Users Test', () => {
	let response

	beforeEach(() => {
		response = {
			data: [
				{
					"id": 1,
					"name": "Leanne Graham",
					"username": "Bret"
				},
				{
					"id": 2,
					"name": "Ervin Howell",
					"username": "Antonette"
				},
				{
					"id": 3,
					"name": "Clementine Bauch",
					"username": "Samantha"
				}
			]
		}
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	test('should get data with correct values', async () => {
		get.mockReturnValue(response)
		renderWithRouter(<Users />)

		const users = await screen.findAllByTestId('user-item')

		expect(get).toBeCalledTimes(1)
		expect(users.length).toBe(3)
	})

	test('redirect to user details page', async () => {
		get.mockReturnValue(response)
		renderWithRouter(null, '/users')
		const users = await screen.findAllByTestId('user-item')

		userEvent.click(users[0])
		expect(screen.getByTestId('user-page')).toBeInTheDocument()
	})
})
