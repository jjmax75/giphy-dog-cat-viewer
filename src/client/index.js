import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import gipyDogCatReducers from './reducers';
import './index.scss';

import PickContainer from './containers/pick-container';

import fetchBeast from './../server/proxy/proxy';

fetchBeast('cat');

const combinedReducers = combineReducers(gipyDogCatReducers);
const history = createHistory();
const routerWithHistory = routerMiddleware(history);

const store = createStore(
  combineReducers({ ...combinedReducers, router: routerReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routerWithHistory, thunk),
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={PickContainer} />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
