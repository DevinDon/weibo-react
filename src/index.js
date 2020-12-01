import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { StoreContext } from 'redux-react-hook';
import thunk from 'redux-thunk';
import App from './App';
import './index.scss';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
  ,
  document.getElementById('root')
);
