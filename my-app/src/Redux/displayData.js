import React from 'react';
import { connect } from 'react-redux'
// import { imgStyle } from '../sharedContent';
import { updateList } from './actions.js';
const headingRow = {
    display: 'flex'
};
const btn = {
    margin: '19px'
}
const renderData = (props, deleteArticle) => {
    console.log(props.articles);

    return (<ul>
        {props.articles.map((article, index) => {
            return article.title && <li key={article.title + index}><div style={headingRow}>
                <div>
                    <h5>{article.title}</h5>
                </div>
                {/*<img style={imgStyle} src={article.urlToImage} alt="" />*/}
                <div>
                    <button style={btn} onClick={() => deleteArticle(article)}>X</button>
                </div>
            </div></li>
        })}
    </ul>
    )
}
let DisplayData = (props) => {
    function deleteArticle(article) {
        const filteredItems = props.articles.length && props.articles.filter(item => item.title !== article.title);
        props.modifyData(filteredItems)
    }
    return (props.articles && props.articles.length ?
        <div >
            {renderData(props, deleteArticle)}
        </div> :
        null)
};

const mapStateToProps = (state) => ({
    articles: state.news ? state.news : [],
})
const mapDispatchToProps = dispatch => {
    return {
        modifyData: (filteredItems) => dispatch(updateList(filteredItems))
    }
}
DisplayData = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayData)

export default DisplayData;