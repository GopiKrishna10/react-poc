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
    // function deleteArticle(article){
    //       const filteredItems = content.list.filter(item => item.title !== article.title)
    //     dispatch({ type: 'SET_LIST', list: filteredItems });
    // }
    return (
        <Fragment>
            <div style={btnBlock}>
                <button style={btnStyles} onClick={callData}>Get Data By Redux</button>
            </div>
            <div>
                <DisplayData/>
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


