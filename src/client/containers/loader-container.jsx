import { connect } from 'react-redux';

import Loader from './../components/common/loader/loader';

const mapStateToProps = state => ({
  active: state.loading,
});

const LoaderContainer = connect(mapStateToProps)(Loader);

export default LoaderContainer;
