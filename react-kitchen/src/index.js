import React from 'react';
import ReactDOM from 'react-dom';
import App from './profile.js'

ReactDOM.render( <App ref={(App) => {window.homeApp = App}} />, document.getElementById('root') );