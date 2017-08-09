/* path to file: ./src/index.js
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React from 'react';
import { render } from 'react-dom';

/* components
*/
import App from './components/App.jsx';

/* stylesheets
*/
require('./scss/main.scss');

render(
	<App />, document.querySelector('#app')
);
