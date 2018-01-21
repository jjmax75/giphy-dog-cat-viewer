import './results.scss';

import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import Button from './../common/button/button';
import ResultItem from './result-item/result-item';

class Results extends React.PureComponent {
  displayResults() {
    return this.props.beasts.map(beast => (
      <ResultItem
        key={shortid.generate()}
        still={beast.previewImage}
        animated={beast.previewAnimation}
        title={beast.title}
        id={beast.id}
        history={this.props.history}
      />
    ));
  }

  render() {
    return (
      <div className={this.props.activeBeast}>
        <nav>
          <Button
            icon={'\u2190'}
            disabled={this.props.match.params.offset <= 0}
            text="Prev"
            action={() =>
              this.props.changePage(
                this.props.activeBeast,
                Number(this.props.match.params.offset) - 25,
              )
            }
          />
          <Button
            icon={'\u2191'}
            text="Pick Again"
            action={() => this.props.history.push('/')}
          />
          <Button
            icon={'\u2192'}
            text="Next"
            action={() =>
              this.props.changePage(
                this.props.activeBeast,
                Number(this.props.match.params.offset) + 25,
              )
            }
          />
        </nav>

        {this.props.beasts.length > 0 ? (
          <div className="results-list">{this.displayResults()}</div>
        ) : null}
      </div>
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
