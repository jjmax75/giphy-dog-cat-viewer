import { connect } from 'react-redux';

import Pick from './../components/pick/pick';

import { getBeastsAction } from './../actions/results.actions';

const mapDipatchToProps = (dispatch, ownProps) => ({
  pickBeast: beastType => {
    dispatch(getBeastsAction(beastType, 0, ownProps.history));
  },
});

const PickContainer = connect(undefined, mapDipatchToProps)(Pick);

export default PickContainer;
