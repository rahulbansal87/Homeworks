import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  const newStore = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={newStore} />, root);

});

const addLoggingToDispatch = store => next => action => {
  let local = store.dispatch;
  console.log('old state:', store.getState());
  console.log('action:', action);
  let result = local(action);
  console.log('new state:', store.getState());
  return result;
};

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;

  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch);
  });

  return Object.assign({}, store, { dispatch });
};
