import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

const addLoggingToDispatch = store => next => action => {
  console.log('old state:', store.getState());
  console.log('action:', action);
  let result = next(action);
  console.log('new state:', store.getState());
  return result;
};

// const applyMiddlewares = (store, ...middlewares) => {
//   let dispatch = store.dispatch;
//
//   middlewares.forEach(middleware => {
//     dispatch = middleware(store)(dispatch);
//   });
//
//   return Object.assign({}, store, { dispatch });
// };

export default configureStore;
