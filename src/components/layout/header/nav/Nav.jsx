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
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</div>
		)
	}
}

export default Nav;