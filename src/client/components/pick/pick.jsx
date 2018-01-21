import './pick.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Button from './../common/button/button';
import Heading from './../common/heading/heading';

const Pick = props => (
  <React.Fragment>
    <Heading level="1" text={'Giphy Cats and Dogs'} />
    <p>You can pick between:</p>
    <div className="grid">
      <div className="col">
        <Button text="Cats" action={() => props.pickBeast('cat')} />
      </div>
      <div className="col">
        <Button text="Dogs" action={() => props.pickBeast('dog')} />
      </div>
    </div>
  </React.Fragment>
);

Pick.propTypes = {
  pickBeast: PropTypes.func.isRequired,
};

export default Pick;
