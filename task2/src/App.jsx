import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftMenu from './components/LeftMenu';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <LeftMenu/>
        <Content content="Some text here"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
