// @flow

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeModule from './modules/HomeModule'
import SearchResultModule from './modules/SearchResultModule'
import NotFound from './components/pages/NotFound'
import './App.css'
import './vendor/bootstrap.min.css'

class App extends Component<Object, Object> {
  render () {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={HomeModule} />
          <Route path='/search/:query?' component={SearchResultModule} />
          <Route path='/film/:id' component={SearchResultModule} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App
