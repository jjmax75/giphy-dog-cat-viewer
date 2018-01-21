import './button.scss';

import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    return (
      <button onClick={this.props.action} disabled={this.props.disabled}>
        {this.props.text}
        {this.props.icon ? <span class="icon">{this.props.icon}</span> : null}
      </button>
    );
  }
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
