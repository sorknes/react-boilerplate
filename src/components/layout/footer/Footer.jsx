/* path to file: ./src/components/footer/Footer.jsx
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React, { Component } from 'react';

class Footer extends React.Component {
	render() {
		return(
			<div className="rb-container-fluid">
				<footer id="main-footer" className="container" role="contentinfo">
					<address>
						<p>For further information, please contact <a href="mailto:admin@example.com" aria-label="admin@example.com" title="admin@example.com">Admin</a>.</p>
					</address>
				</footer>
			</div>
		)
	}
}

export default Footer; 