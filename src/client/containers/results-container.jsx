import { connect } from 'react-redux';

import Results from './../components/results/results';

const mapStateToProps = state => ({
  data: state.activeBeast === 'dog' ? state.dogList : state.catList,
  activeBeast: state.activeBeast,
});

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
