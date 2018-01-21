import React from 'react';
import PropTypes from 'prop-types';

const buildHeading = (level, text) => {
  const Tag = `h${level}`;

  return <Tag>{text}</Tag>;
};

const Heading = props => buildHeading(props.level, props.text);

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
