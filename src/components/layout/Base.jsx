/* path to file: ./src/components/layout/Base.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

/* components
*/
import Header from './header/Header';
import Footer from './footer/Footer';

class Base extends React.Component {
	render() {
		return (
			<div>
				<Header />

				<div className="container">
					<main id="main">
						<section role="main">
							{this.props.children}
						</section>
					</main>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default Base;