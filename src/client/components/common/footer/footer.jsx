import './footer.scss';

import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return <footer>{this.props.children}</footer>;
  }
}

export default Footer;
