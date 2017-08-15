/* path to file: ./src/components/App.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

/* components
*/
import Header from './header/Header';

import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />

        {/* <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact-us" component={Contact}/>
          </div>
        </Router> */}
      </div>
    );
  }
}

export default App;
