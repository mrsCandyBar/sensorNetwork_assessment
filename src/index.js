import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from '../src/pages/app';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './stores';

const middleware = [thunk];
const composeEnhancer = compose;
const store = createStore(rootReducer, composeEnhancer(
  applyMiddleware(...middleware)
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
