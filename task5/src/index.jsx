import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import './index.css'
import App from './App'
import LoadingView from './LoadingView'
import ErrorBoundary from './ErrorBoundary'
import { persistor, store } from './store'

ReactDOM.render((
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ErrorBoundary>
), document.getElementById('root'))
