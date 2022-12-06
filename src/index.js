import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';  // adding css
import 'font-awesome/css/font-awesome.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<BrowserRouter><App /></BrowserRouter>);
registerServiceWorker();