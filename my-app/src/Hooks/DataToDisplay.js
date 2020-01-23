import React, { Fragment } from 'react';
import UserContext from './contextTypes';

const imgStyle = {
    hight: '40%',
    width: '40%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};
const DataToDisplayComponent = (props) => {
    const news = React.useContext(UserContext);
    function deleteArticle(article) {
        props.deleteThing(article);
    }
    const renderData = () => {
        return (<ul>
            {news && news.map((article,index) => {
                return article.title && <li key={article.title + index}><div >
                    <h5>{article.title}</h5>
                    <div>
                    <img style={imgStyle} src={article.urlToImage} alt="" />
                    </div>
                    <button onClick={() => deleteArticle(article)}>Delete Atricle</button>
                </div></li>
            })}
        </ul>
        )
    }
    return (
        <Fragment>
            {renderData()}
        </Fragment>

    )
};

export default DataToDisplayComponent;