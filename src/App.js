import { useEffect, useState } from 'react'

import './App.css'

export const App = () => {
  const [data ,setData] = useState(null)

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
      {data && <div>DATA</div>}
      <h1>Goodby world</h1>
      <button>Kick me!!!</button>
      <input type={'text'} placeholder={'input value...'}></input>
    </div>
  )
}
