import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// const p = React.createElement(
//   'p',
//   {},
//   'Кажется, мы подключили React'
// )

// const h1 = React.createElement(
//   'h1',
//   {className: 'element'},
//   p
// );
//////////////////////////////////////////////////////////////////////////////



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

