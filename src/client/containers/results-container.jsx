import { connect } from 'react-redux';

import Results from './../components/results/results';

const sendBeastDetails = data =>
  data.result.data.map(id => ({
    title: data.entities.beasts[id].title,
    previewImage: data.entities.beasts[id].images.fixed_width_still.url,
    previewAnimation: data.entities.beasts[id].images.fixed_width.url,
  }));

const mapStateToProps = state => ({
  beasts: state.activeBeast
    ? state.activeBeast === 'dog'
      ? sendBeastDetails(state.dogList)
      : sendBeastDetails(state.catList)
    : [],
  activeBeast: state.activeBeast,
});

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
