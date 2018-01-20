import React from 'react';

import Header from './../common/header/header';

const Pick = () => (
  <React.Fragment>
    <Header level={1} text={'Giphy Cats and Dogs'} />
    <p>You can pick between:</p>
    <ul>
      <li>Cats</li>
      <li>Dogs</li>
    </ul>
  </React.Fragment>

);

export default Pick;
