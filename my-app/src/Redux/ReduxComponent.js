import React, { Fragment } from 'react';
import { getData } from './actions';
import { connect } from 'react-redux';
import DisplayData from './displayData';
import Loading from './Loading';

const btnStyles = {
    border: 'none',
    height: '35px',
    width: '115px',
    cursor:'pointer',
    borderRadius: '4px'
}
const btnBlock = {
    textAlign: 'center'
}
let ReduxComponent = (props) => {

    function callData() {
        props.getData();
    }

    return (
        <Fragment>
            <div style={btnBlock}>
                <button style={btnStyles} onClick={callData}>Click To See News</button>
            </div>
            <div>
                <DisplayData />
                <Loading />
            </div>
        </Fragment>

    )
}

const mapDispatchToProps = {
    getData: getData,
};
// ReduxComponent = connect(
//     null,
//     mapDispatchToProps,
// )(ReduxComponent);

export default connect(
    null,
    mapDispatchToProps,
)(ReduxComponent);


