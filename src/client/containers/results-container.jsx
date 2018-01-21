import { connect } from 'react-redux';

import Results from './../components/results/results';

import { getBeastsAction } from './../actions/results.actions';

const sendBeastDetails = data =>
  data.result.data.map(id => ({
    title: data.entities.beasts[id].title,
    previewImage: data.entities.beasts[id].images.fixed_width_still.url,
    previewAnimation: data.entities.beasts[id].images.fixed_width.url,
    id,
  }));

const mapStateToProps = state => ({
  beasts: state.activeBeast
    ? state.activeBeast === 'dog'
      ? sendBeastDetails(state.dogList)
      : sendBeastDetails(state.catList)
    : [],
  activeBeast: state.activeBeast,
});

const mapDipatchToProps = (dispatch, ownProps) => ({
  changePage: (beastType, offset) => {
    dispatch(getBeastsAction(beastType, offset, ownProps.history));
  },
});

const ResultsContainer = connect(mapStateToProps, mapDipatchToProps)(Results);

export default ResultsContainer;
