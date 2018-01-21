import './loader.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Image from './../image/image';

class Loader extends React.PureComponent {
  render() {
    return this.props.active ? (
      <div className="loader">
        <Image src="/loader.svg" title="Loading content" />
      </div>
    ) : null;
  }
}

Loader.propTypes = {
  active: PropTypes.bool,
};

export default Loader;
