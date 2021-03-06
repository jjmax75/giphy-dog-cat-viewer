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
import ResultsContainer from './containers/results-container';
import LoaderContainer from './containers/loader-container';
import DetailsContainer from './containers/details-container';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Heading from './components/common/heading/heading';

const history = createHistory();
const routerWithHistory = routerMiddleware(history);

const store = createStore(
  combineReducers({ ...gipyDogCatReducers, router: routerReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routerWithHistory, thunk),
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <LoaderContainer />
        <Header>
          <Heading level="1" text="Giphy Cat &amp; Dog Viewer" />
        </Header>
        <main>
          <Route path="/" exact={true} component={PickContainer} />
          <Route path="/results/:offset?" component={ResultsContainer} />
          <Route path="/details/:id" component={DetailsContainer} />
        </main>
        <Footer>
          <p>By John Behan for SWRVE</p>
        </Footer>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
