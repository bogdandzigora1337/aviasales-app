import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { rootReducer } from './redux/reducers/rootReducer'
import './index.css'
import App from './components/app/app.jsx'

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
