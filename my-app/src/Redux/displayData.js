import React from 'react';
import { connect } from 'react-redux'


const imgStyle = {
    hight: '40%',
    width: '40%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};

// const errorMessage = {
//     color: 'red'
// }
const renderData = (articles) => {
    return (<ul>
        {articles.map(article => {
            return article.title && <li key={article.title}><div >
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