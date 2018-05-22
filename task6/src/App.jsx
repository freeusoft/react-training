import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeModule from './modules/HomeModule'
import SearchResultModule from './modules/SearchResultModule'
import NotFound from './components/NotFound/NotFound'
import './App.css'
import './vendor/bootstrap.min.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={HomeModule} />
          <Route path='/results' component={SearchResultModule} />
          <Route path='/result/:id' component={SearchResultModule} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
