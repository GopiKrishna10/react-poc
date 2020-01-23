import React, { Fragment } from 'react';
import { getData } from './actions';
import { connect } from 'react-redux';
import DisplayData from './displayData';
import Loading from './Loading';
import {btnStyles,btnBlock} from '../sharedContent'
let ReduxComponent = (props) => {

    function callData() {
        props.getData();
    }

    return (
        <Fragment>
            <div style={btnBlock}>
                <button style={btnStyles} onClick={callData}>Get Data By Redux</button>
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


