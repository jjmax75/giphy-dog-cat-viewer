import React from 'react';
import PropTypes from 'prop-types';

import Button from './../common/button/button';
import Header from './../common/header/header';
import Video from './../common/video/video';

class Details extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Button
          icon={'\u2191'}
          text="Pick another GIF"
          action={() => this.props.history.goBack()}
        />
        {this.props.beast ? (
          <React.Fragment>
            <Header level="2" text={this.props.beast.title} />
            <Video mp4={this.props.beast.images.original.mp4} />
          </React.Fragment>
        ) : null}
        <p>Details</p>
      </React.Fragment>
    );
  }
}

Details.propTypes = {
  beast: PropTypes.object,
};

export default Details;
