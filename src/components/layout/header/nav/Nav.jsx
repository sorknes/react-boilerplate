/* path to file: ./src/components/header/nav/Nav.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Nav extends React.Component {
	render() {
		return (
			<nav id="main-nav" className="" role="navigation">
				<ul role="menu">
					<li role="none">
						<Link to="/" role="menuitem" aria-label="Home" title="Home">Home</Link>
					</li>
					<li role="none">
						<Link to="/about" role="menuitem" aria-label="About" title="About">About</Link>
					</li>
					<li role="none">
						<Link to="/contact" role="menuitem" aria-label="Contact" title="Contact">Contact</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Nav;