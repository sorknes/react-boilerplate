/* path to file: ./src/components/App.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

/* components
*/
import Header from './header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;
