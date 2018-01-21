import { connect } from 'react-redux';

import Details from './../components/details/details';

const getBeast = (state, id) => {
  const beastList = state.activeBeast === 'dog' ? 'dogList' : 'catList';

  return state[beastList].entities.beasts[id];
};

const mapStateToProps = (state, ownProps) => ({
  beast: state.activeBeast
    ? getBeast(state, ownProps.match.params.id)
    : undefined,
});

const DetailsContainer = connect(mapStateToProps)(Details);

export default DetailsContainer;
