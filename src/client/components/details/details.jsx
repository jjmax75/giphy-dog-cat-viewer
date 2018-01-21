import './details.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Button from './../common/button/button';
import Heading from './../common/heading/heading';
import Video from './../common/video/video';

class Details extends React.PureComponent {
  render() {
    return (
      <div className={`details ${this.props.beastType}`}>
        <Button
          icon={'\u2191'}
          text="Pick another GIF"
          action={() => this.props.history.goBack()}
        />
        {this.props.beast ? (
          <React.Fragment>
            <Heading level="1" text={this.props.beast.title} />
            <Video mp4={this.props.beast.images.original.mp4} />
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

Details.propTypes = {
  beast: PropTypes.object,
  beastType: PropTypes.string,
};

export default Details;
