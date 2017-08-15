/* path to file: ./src/components/header/Header.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

/* components
*/
import Logo from './logo/Logo';
import Nav from './nav/Nav';

class Header extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<header id="main-header" className="" role="banner">
					<Logo />

					<Nav />
				</header>
			</div>
		);
	}
}

export default Header;