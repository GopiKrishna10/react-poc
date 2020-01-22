import React from 'react';
import { connect } from 'react-redux'

const loadingStyles = {
    textAlign: 'center'
}
let Loading = ({ loading }) => (

  loading ?
    <div style={loadingStyles}>
      <h1>LOADING...</h1>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Loading = connect(
  mapStateToProps,
  null
)(Loading)


export default Loading;
