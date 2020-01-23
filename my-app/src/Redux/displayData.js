import React from 'react';
import { connect } from 'react-redux'
import {imgStyle} from '../sharedContent';

const renderData = (articles) => {
    return (<ul>
        {articles.map((article, index) => {
            return article.title && <li key={article.title + index}><div >
                <h5>{article.title}</h5>
                <img style={imgStyle} src={article.urlToImage} alt="" />
            </div></li>
        })}
    </ul>
    )
}
let DisplayData = ({ articles }) => (
    articles && articles.length ?
        <div >
            {renderData(articles)}
        </div> :
        null
);

const mapStateToProps = (state) => ({
    articles: state.news,
})

DisplayData = connect(
    mapStateToProps,
    null
)(DisplayData)

export default DisplayData;