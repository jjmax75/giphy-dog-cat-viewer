import './result-item.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Image from './../../common/image/image';

class ResultItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: this.props.still,
    };
  }

  handleMouseOver = () => {
    this.setState({
      imgSrc: this.props.animated,
    });
  };

  handleMouseOut = () => {
    this.setState({
      imgSrc: this.props.still,
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.still !== this.props.still) {
      this.setState({
        imgSrc: nextProps.still,
      });
    }
  }

  render() {
    return (
      <div className="result-item">
        <Image
          src={this.state.imgSrc}
          title={this.props.title}
          handleMouseOver={this.handleMouseOver}
          handleMouseOut={this.handleMouseOut}
        />
      </div>
    );
  }
}

ResultItem.propTypes = {
  still: PropTypes.string.isRequired,
  animated: PropTypes.string,
  title: PropTypes.string,
};

export default ResultItem;
