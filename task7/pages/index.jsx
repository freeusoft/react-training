import React from 'react'
import ReactDOM from 'react-dom'
import HomeModule from '../src/modules/HomeModule'
import '../src/index.css'
import ErrorBoundary from '../src/ErrorBoundary'
import fetch from 'isomorphic-unfetch'
import { nextConnect } from '../src/store'
import '../src/App.css'
import '../src/vendor/bootstrap.min.css'

const Index = (props) => (
  <div className='app'>
    <link rel='stylesheet' href='/_next/static/style.css' />
    <ErrorBoundary>
      <HomeModule />
    </ErrorBoundary>
  </div>
)

export default nextConnect((state) => state)(Index)