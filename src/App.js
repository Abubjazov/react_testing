import { useEffect, useState } from 'react'

import './App.css'

export const App = () => {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [inputData, setInputData] = useState('input value...')

  const onClick = () => {
    setToggle(!toggle)
  }

  const onChange = (e) => {
    setInputData(e.target.value)
  }

  useEffect(() => {
    const stOne = setTimeout(() => {
      setData({})
    }, 1000)

    return () => {
      clearTimeout(stOne)
    }
  }, [])

  return (
    <div className='App'>
      {toggle && <div data-testid={'toggle-element'}>TOGGLE</div>}
      {data && <div>DATA</div>}
      <h1>Goodby world</h1>
      <button onClick={onClick}>Kick me!!!</button>
      <input type={'text'} placeholder={'input value...'} value={inputData} onChange={onChange} data-testid={'input-element'}/>
    </div>
  )
}
