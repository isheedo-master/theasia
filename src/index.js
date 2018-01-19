import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:400,700']
  }
});

require('./style/app.scss');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
