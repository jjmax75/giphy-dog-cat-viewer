import './results.scss';

import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import Button from './../common/button/button';
import Header from './../common/header/header';
import ResultItem from './result-item/result-item';

class Results extends React.Component {
  displayResults() {
    return this.props.beasts.map(beast => (
      <ResultItem
        key={shortid.generate()}
        still={beast.previewImage}
        animated={beast.previewAnimation}
        title={beast.title}
      />
    ));
  }

  render() {
    return (
      <React.Fragment>
        <Button text="Go back" action={() => this.props.history.goBack()} />
        <Header level="2" text="Results List" />
        {this.props.beasts.length > 0 ? (
          <div className="results-list">{this.displayResults()}</div>
        ) : null}
      </React.Fragment>
    );
  }
}

Results.propTypes = {
  beasts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      previewImage: PropTypes.string,
      previewAnimation: PropTypes.string,
    }),
  ).isRequired,
  activeBeast: PropTypes.string.isRequired,
};

export default Results;
