import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/common/header/header';

const App = () => (
  <Header level={1} text={'Giphy Cats and Dogs'} />
);

ReactDOM.render(<App />, document.querySelector('#root'));
