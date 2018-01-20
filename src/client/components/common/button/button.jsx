import React from 'react';

class Button extends React.PureComponent {
  render() {
    return <button onClick={this.props.action}>{this.props.text}</button>;
  }
}

export default Button;
