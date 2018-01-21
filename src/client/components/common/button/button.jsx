import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    return <button onClick={this.props.action}>{this.props.text}</button>;
  }
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default Button;
