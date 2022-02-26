import { fireEvent, getDefaultNormalizer, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

import { Users } from './Users'

jest.mock('axios')

describe('TEST USERS', () => {
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

  test('render Users - component', async () => {
		axios.get.mockReturnValue(response)
    render(<Users />)

		const users = await screen.findAllByTestId('user-item')

		expect(users.length).toBe(3)
		expect(axios.get).toBeCalledTimes(1)
	})
})
