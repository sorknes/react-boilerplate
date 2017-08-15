/* path to file: ./src/components/header/Header.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

/* components
*/
import Nav from './nav/Nav';

class Header extends React.Component {
	render() {
		return (
			<div>
				header start

				<Nav />

				header end
			</div>
		);
	}
}

export default Header;