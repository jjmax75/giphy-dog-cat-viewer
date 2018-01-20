import React from 'react';

const buildHeading = (level, text) => {
  const Tag = `h${level}`;

  return <Tag>{text}</Tag>;
}
const Heading = props => (
  buildHeading(props.level, props.text)
);

export default Heading;
