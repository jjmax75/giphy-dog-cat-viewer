import React from 'react';
import PropTypes from 'prop-types';

class Heading extends React.PureComponent {
  buildHeading(level, text) {
    const Tag = `h${level}`;
    return <Tag>{text}</Tag>;
  }

  render() {
    return this.buildHeading(this.props.level, this.props.text);
  }
}

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
