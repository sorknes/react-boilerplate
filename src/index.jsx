/* path to file: ./src/index.js
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


import React from 'react';
import { render } from 'react-dom';

/* components
*/
import Routes from './Routes';

/* stylesheets
*/
require('./scss/main.scss');

render(
	<Routes />, document.querySelector('#app')
);
