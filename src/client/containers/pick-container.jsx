import { connect } from 'react-redux';

import Pick from './../components/pick/pick';

import { fetchBeastsAction } from './../actions/results.actions';

const mapDipatchToProps = (dispatch, ownProps) => ({
  pickBeast: beastType => {
    ownProps.history.push('/results');
    dispatch(fetchBeastsAction(beastType));
  },
});

const PickContainer = connect(undefined, mapDipatchToProps)(Pick);

export default PickContainer;
