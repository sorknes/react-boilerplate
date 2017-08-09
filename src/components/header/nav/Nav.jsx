/* path to file: ./src/components/header/nav/Nav.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from '../../home/Home';
import About from '../../about/About';
import Contact from '../../contact/Contact';

class Nav extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact-us">Contact us</Link></li>
					</ul>

					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/contact-us" component={Contact}/>
				</div>
			</Router>
		)
	}
}

export default Nav;