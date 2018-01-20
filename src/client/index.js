import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import gipyDogCatReducers from './reducers';
import './index.scss';

import Header from './components/common/header/header';

const combinedReducers = combineReducers(gipyDogCatReducers);
const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <Provider store={store}>
    <Header level={1} text={'Giphy Cats and Dogs'} />
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
