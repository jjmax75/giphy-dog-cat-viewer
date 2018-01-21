import './pick.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Button from './../common/button/button';
import Image from './../common/image/image';

class Pick extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="grid">
          <div className="col cat">
            <Button text="Cats" action={() => this.props.pickBeast('cat')} />
            <Image src="/img/cat.png" title="Pick cats" />
          </div>
          <div className="col dog">
            <Button text="Dogs" action={() => this.props.pickBeast('dog')} />
            <Image src="/img/dog.png" title="Pick dogs" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Pick.propTypes = {
  pickBeast: PropTypes.func.isRequired,
};

export default Pick;
