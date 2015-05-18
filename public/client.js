import React from 'react';
import App from './App';

const payload = window.INITIAL_PAYLOAD;

React.render(<App {...payload} />, document.getElementById('app'));
