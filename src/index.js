import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider }from 'react-redux';
import {combineReducers, createStore} from 'redux';


ReactDOM.render(<Provider store = {createStore(combineReducers({data: {}}))}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
