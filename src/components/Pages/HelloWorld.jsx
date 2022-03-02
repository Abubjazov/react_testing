import React, { useState } from 'react'

export const HelloWorld = () => {
	const [value, setValue] = useState('')
	const [visible, setVisible] = useState(false)

	const toggle = () => value === 'hello' && setVisible(!visible)
	const onChange = (e) => setValue(e.target.value)

	return (
		<div>
			<input type={'text'} id={'search'} value={value} onChange={onChange} />
			<button id={'toggle'} onClick={toggle}>Hello WDIO</button>
			{visible && <h1 id={'h1'}>Hello World</h1>}
		</div>
	)
}
