import React from 'react';

import Button from './../common/button/button';
import Header from './../common/header/header';

const Pick = props => (
  <React.Fragment>
    <Header level={1} text={'Giphy Cats and Dogs'} />
    <p>You can pick between:</p>
    <ul>
      <li>
        <Button text="Cats" action={() => props.pickBeast('cat')} />
      </li>
      <li>
        <Button text="Dogs" action={() => props.pickBeast('dog')} />
      </li>
    </ul>
  </React.Fragment>
);

export default Pick;
