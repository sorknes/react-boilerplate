/* path to file: ./src/components/layout/Base.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

/* components
*/
import Header from './header/Header';

class Base extends React.Component {
	render() {
		return (
			<div>
				<Header />

				{this.props.children}

				<footer>footer</footer>
			</div>
		);
	}
}

export default Base;