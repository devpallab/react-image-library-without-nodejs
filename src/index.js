import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";  // for react version 18
import { Provider } from 'react-redux';
import configureStore from './stores';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
        <App />
    </Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
