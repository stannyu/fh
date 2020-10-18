import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { AppState } from './constants/action-types';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
