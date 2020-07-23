import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Asap:200le,400le,300le,600le,700le',
      'Montserrat:200le,400le,300le,600le,700le',
      'Source Sans Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i',
      'Merriweather:300,300i,400,400i,700,700i,900,900i',
      'Lato:300le,400le,500le,600le'
    ]
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
