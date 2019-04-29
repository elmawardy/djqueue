import React from 'react';
import ReactDOM from 'react-dom';
import App from './HomePage.js'

// class Index extends React.Component
// {
//     render(){
//         return(
//             <App></App>
//         )
//     }
// }


ReactDOM.render( <App ref={(App) => {window.homeApp = App}} />, document.getElementById('root') );