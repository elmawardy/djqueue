import React from 'react';
import ReactDOM from 'react-dom';
import App from './ServiceManager.js'

// class Index extends React.Component
// {
//     render(){
//         return(
//             <App></App>
//         )
//     }
// }


ReactDOM.render( <App ref={(App) => {window.ServiceManager = App}} />, document.getElementById('root') );