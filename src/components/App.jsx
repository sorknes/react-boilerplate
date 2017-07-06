/*  ------------------------------------------------
./src/components/App.jsx
---------------------------------------------------- */


import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// components
import Header from './header/Header';
import Home from './home/Home';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />

        <BrowserRouter>
          {/* Each route is defined with Route */}
          <Route path="/" component={Home}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
