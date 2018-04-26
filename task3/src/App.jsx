import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchResult from './components/SearchResult/SearchResult'
import './vendor/bootstrap.min.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <ErrorBoundary>
          <Header />
          <SearchResult content='Some text here' />
          <Footer />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
