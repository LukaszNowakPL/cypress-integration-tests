import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/App';
import makeServer from './server/server';

if(process.env.REACT_APP_BLOCK_MIRAGEJS !== 'true') {
    makeServer();
}


ReactDOM.render(<App />, document.getElementById('root'));
