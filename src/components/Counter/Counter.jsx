import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../store/reducers/counterReducer"
import { getCounterValue } from "../../store/selectors/getCounterValue/getCounterValue"

export const Counter = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)

	const incCounter = () => {
		dispatch(increment())
	}

	const decCounter = () => {
		dispatch(decrement())
	}

	return (
		<div>
			<h1 date-testid={'counter-value'}>{counterValue}</h1>
			<button date-testid={'decrement-btn'} onClick={decCounter}>Dec</button>
			<button date-testid={'increment-btn'} onClick={incCounter}>Inc</button>
		</div>
	)
}
