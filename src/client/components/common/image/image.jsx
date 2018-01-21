import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.PureComponent {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.title}
        onMouseOver={this.props.handleMouseOver}
        onMouseOut={this.props.handleMouseOut}
      />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};

export default Image;
