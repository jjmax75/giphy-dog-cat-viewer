import React from 'react';
import PropTypes from 'prop-types';

class Video extends React.PureComponent {
  render() {
    return (
      <video controls loop>
        <source src={this.props.mp4} type="video/mp4" />
      </video>
    );
  }
}

Video.propTypes = {
  mp4: PropTypes.string,
};

export default Video;
