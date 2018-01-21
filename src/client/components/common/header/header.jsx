import './header.scss';

import React from 'react';

class Header extends React.PureComponent {
  render() {
    return <header>{this.props.children}</header>;
  }
}

export default Header;
