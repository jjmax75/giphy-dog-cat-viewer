import React from 'react';

import Button from './../common/button/button';

class Results extends React.PureComponent {
  displayResults() {
    console.log(this.props);
    return this.props.data.result.data.map(id => (
      <li>{this.props.data.entities.beasts[id].title}</li>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <Button text="Go back" action={() => this.props.history.goBack()} />
        <p>This is the results list</p>
        {this.props.data.result ? <ul>{this.displayResults()};</ul> : null}
      </React.Fragment>
    );
  }
}

export default Results;
