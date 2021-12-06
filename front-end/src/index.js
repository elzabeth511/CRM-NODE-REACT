import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import "bootstrap/dist/js/bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import Popper from 'popper.js'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { AdminApp } from './components/admin/adminApp';
import { Test } from './test';

ReactDOM.render(
  <React.StrictMode>
   < Test/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
