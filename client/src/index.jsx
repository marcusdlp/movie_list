import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const data = require('../../database/dummyData.js');

ReactDOM.render(<App movies={data}/>, document.getElementById('root'));