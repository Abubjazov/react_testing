import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { createReduxStore } from './store/store'
import { App } from './App'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
