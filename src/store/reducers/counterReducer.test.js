import { counterReducer, decrement, increment } from './counterReducer'

describe('counter Reducer', () => {
	test('increment', () => {
		expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
	})

	test('decrement', () => {
		expect(counterReducer({value: 1}, decrement())).toEqual({value: 0})
	})
})
