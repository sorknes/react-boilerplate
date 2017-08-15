/* path to file: ./src/Routes.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';
import {
	BrowserRouter as Router,
  Route
} from 'react-router-dom';

/* components
*/
import Base from './components/layout/Base';

import Home from './components/home/Home';
import About from './components/about/About';

class Routes extends React.Component {
  render() {
    return (
			<Router>
				<Base>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
				</Base>
			</Router>
    );
  }
}

export default Routes;